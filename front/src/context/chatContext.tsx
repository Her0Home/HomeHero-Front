"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { getUserChats, getChatById, sendMessage } from '@/services/chats'
import { useAuth } from './authcontext'
import { initSocket, joinChatRoom, leaveChatRoom } from '@/hooks/initSoket'

interface Message {
  id: string
  content: string
  sentAt: string
  isRead: boolean
  sender: {
    id: string
    name: string
    imageProfile: string
  },
  chat?: {
    id: string
  }
}

interface Chat {
  id: string
  lastMessageContent: string
  lastMessageAt: string
  cliente: {
    id: string
    name: string
    imageProfile: string
  }
  profesional: {
    id: string
    name: string
    imageProfile: string
  }
  unreadCount: number
}

interface ChatContextType {
  chats: Chat[]
  currentChat: {
    chat: Chat | null
    messages: Message[]
  }
  loading: boolean
  setCurrentChatId: (chatId: string | null) => void
  sendMessage: (content: string) => Promise<void>
  refreshChats: () => Promise<void>
}

const ChatContext = createContext<ChatContextType | undefined>(undefined)

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const { token, user } = useAuth()
  const [chats, setChats] = useState<Chat[]>([])
  const [currentChat, setCurrentChat] = useState<{ chat: Chat | null; messages: Message[] }>({
    chat: null,
    messages: []
  })
  const [currentChatId, setCurrentChatId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const loadChats = async () => {
    if (!token) return
    
    try {
      setLoading(true)
      const chatsData = await getUserChats(token)
      setChats(chatsData)
    } catch (error) {
      console.error('Error al cargar chats:', error)
    } finally {
      setLoading(false)
    }
  }

  // Efecto para manejar la carga inicial y los listeners del socket
  useEffect(() => {
    if (!token) return; // No hacer nada si no hay token

    const socket = initSocket()
    loadChats()

    const handleNewMessage = (message: Message) => {
      // La condición ahora usará el 'currentChatId' más reciente
      if (currentChatId && message.chat?.id === currentChatId) {
        setCurrentChat(prev => ({
          ...prev,
          messages: [...prev.messages, message]
        }))
      }
      // Refrescamos la lista de chats para actualizar el último mensaje
      refreshChats()
    }

    const handleMessagesRead = (payload: { chatId: string, userId: string }) => {
      if (currentChatId === payload.chatId) {
        setCurrentChat(prev => ({
          ...prev,
          messages: prev.messages.map(msg => 
            msg.sender.id !== payload.userId ? { ...msg, isRead: true } : msg
          )
        }))
      }
      refreshChats()
    }

    // Registrar los listeners
    socket.on('new_message', handleNewMessage)
    socket.on('messages_read', handleMessagesRead)

    // Función de limpieza: se ejecuta cuando el componente se desmonta o las dependencias cambian
    return () => {
      socket.off('new_message', handleNewMessage);
      socket.off('messages_read', handleMessagesRead);
    }
  }, [token, currentChatId]); // <-- LA CORRECCIÓN CLAVE: El efecto depende de 'token' y 'currentChatId'

  // Efecto para cambiar de chat y cargar sus detalles
  useEffect(() => {
    const loadChatDetails = async () => {
      if (!token || !currentChatId) {
        setCurrentChat({ chat: null, messages: [] })
        return
      }

      try {
        setLoading(true)
        
        if (currentChat.chat && currentChat.chat.id !== currentChatId) {
          leaveChatRoom(currentChat.chat.id)
        }
        
        joinChatRoom(currentChatId)
        
        const chatDetails = await getChatById(currentChatId, token)
        
        setCurrentChat({
          chat: chatDetails,
          messages: chatDetails.messages || []
        })
      } catch (error) {
        console.error('Error al cargar detalles del chat:', error)
      } finally {
        setLoading(false)
      }
    }

    loadChatDetails()
  }, [currentChatId, token])

  const handleSendMessage = async (content: string) => {
    if (!token || !currentChatId || !content.trim()) return
    
    try {
      await sendMessage(currentChatId, content, token)
    } catch (error) {
      console.error('Error al enviar mensaje:', error)
    }
  }

  const refreshChats = async () => {
    if (token) {
      await loadChats()
    }
  }

  return (
    <ChatContext.Provider
      value={{
        chats,
        currentChat,
        loading,
        setCurrentChatId,
        sendMessage: handleSendMessage,
        refreshChats
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => {
  const context = useContext(ChatContext)
  if (!context) {
    throw new Error('useChat debe ser usado dentro de un ChatProvider')
  }
  return context
}