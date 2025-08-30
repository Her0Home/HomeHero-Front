"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback, useRef } from 'react'
import { getUserChats, initSocket, joinChatRoom, leaveChatRoom, getChatById, sendMessage } from '@/services/chat'
import { useAuth } from './authcontext'
import { Chat, Message } from '@/types/chat'

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
  const { token } = useAuth()
  const [chats, setChats] = useState<Chat[]>([])
  const [currentChat, setCurrentChat] = useState<{ chat: Chat | null; messages: Message[] }>({
    chat: null,
    messages: []
  })
  const [currentChatId, setCurrentChatId] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const prevChatIdRef = useRef<string | null>(null);

  const loadChats = useCallback(async () => {
    if (!token) return;
  
    try {
      setLoading(true);
      const chatsData = await getUserChats(token);
      setChats(chatsData);
    } catch (error) {
      console.error('Error al cargar chats:', error);
    } finally {
      setLoading(false);
    }
  }, [token]);


  useEffect(() => {
    if (!token) return;

    const socket = initSocket()
    loadChats()

    const handleNewMessage = (message: Message) => {
      const messageChatId = message.chat?.id;
      if (!messageChatId) return;

      setChats(prevChats => {
        const updatedChats = prevChats.map(chat => {
          if (chat.id === messageChatId) {
            const newUnreadCount = chat.id !== currentChatId 
              ? (chat.unreadCount || 0) + 1
              : 0;

            return { 
              ...chat, 
              lastMessageContent: message.content, 
              lastMessageAt: message.sentAt,
              unreadCount: newUnreadCount
            };
          }
          return chat;
        });
        
        return updatedChats.sort((a, b) => 
          new Date(b.lastMessageAt ?? 0).getTime() - new Date(a.lastMessageAt ?? 0).getTime()
        );
      });

      if (currentChatId && messageChatId === currentChatId) {
        setCurrentChat(prev => ({
          ...prev,
          messages: [...prev.messages, message]
        }));
      }
    };

    const handleMessagesRead = (_payload: { chatId: string, userId: string }) => {}

    socket.on('new_message', handleNewMessage)
    socket.on('messages_read', handleMessagesRead)

    return () => {
      socket.off('new_message', handleNewMessage);
      socket.off('messages_read', handleMessagesRead);
    }
  }, [token, currentChatId, loadChats]);


  useEffect(() => {
    const loadChatDetails = async () => {
      if (!token || !currentChatId) {
        setCurrentChat({ chat: null, messages: [] })
        return
      }

      try {
        setLoading(true)
        
        if (prevChatIdRef.current && prevChatIdRef.current !== currentChatId) {
          leaveChatRoom(prevChatIdRef.current);
        }
        
        joinChatRoom(currentChatId);
        prevChatIdRef.current = currentChatId;
        
        const chatDetails = await getChatById(currentChatId, token);
        
        setCurrentChat({
          chat: chatDetails,
          messages: chatDetails.messages || []
        });

        setChats(prevChats => prevChats.map(chat => 
            chat.id === currentChatId ? { ...chat, unreadCount: 0 } : chat
        ));

      } catch (error) {
        console.error('Error al cargar detalles del chat:', error);
      } finally {
        setLoading(false);
      }
    }

    loadChatDetails();
  }, [currentChatId, token]);


  const handleSendMessage = async (content: string) => {
    if (!token || !currentChatId || !content.trim()) return
    try {
      await sendMessage(currentChatId, content, token)
    } catch (error) {
      console.error('Error al enviar mensaje:', error)
    }
  }

  const refreshChats = async () => {
    await loadChats()
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