"use client"

import { useEffect, useState } from 'react'
import { useIsMobile } from '@/hooks/use-mobile'
import { ChatList } from '@/components/chat/chat-list'
import { MessageView } from '@/components/chat/message-view'
import { useChat } from '@/context/chatContex'

function ChatLayout() {
  const isMobile = useIsMobile()
  const { currentChat } = useChat()
  const [showMessages, setShowMessages] = useState(!isMobile)

  useEffect(() => {
    if (isMobile) {
      setShowMessages(!!currentChat.chat)
    } else {
      setShowMessages(true)
    }
  }, [currentChat.chat, isMobile])
  
  return (
    <div className="flex h-full">
      {/* Lista de chats (siempre visible en escritorio, condicional en móvil) */}
      {(!isMobile || !showMessages) && (
        <div className={`${isMobile ? 'w-full' : 'w-1/3 border-r'}`}>
          <ChatList />
        </div>
      )}
      
      {/* Vista de mensajes (siempre visible en escritorio, condicional en móvil) */}
      {(!isMobile || showMessages) && (
        <div className={`${isMobile ? 'w-full' : 'w-2/3'}`}>
          <MessageView />
        </div>
      )}
    </div>
  )
}

export default function ChatsPage() {
  return (
    <div className="h-[calc(100vh-4rem)]">
      <ChatLayout />
    </div>
  )
}