"use client"

import { useChat } from '@/context/chatContex'
import { useAuth } from '@/context/authcontext'
import { formatDistanceToNow } from 'date-fns'
import { es } from 'date-fns/locale'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'

export function ChatList() {
  const { chats, setCurrentChatId, currentChat, loading } = useChat()
  const { user } = useAuth()

  if (loading && chats.length === 0) {
    return (
      <div className="flex flex-col h-full items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-hero-orange"></div>
        <p className="mt-2 text-hero-orange font-Text">Cargando conversaciones...</p>
      </div>
    )
  }

  if (chats.length === 0) {
    return (
      <div className="flex flex-col h-full items-center justify-center p-4">
        <MessageCircle className="h-12 w-12 text-hero-gray mb-2" />
        <h3 className="text-lg font-Title text-hero-gray">Sin conversaciones</h3>
        <p className="text-sm text-center text-hero-gray font-Text">
          Aún no tienes conversaciones activas.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <h2 className="font-Title text-lg p-4 border-b">Mis conversaciones</h2>
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => {
          const isClient = user?.id === chat.cliente.id
          const otherPerson = isClient ? chat.profesional : chat.cliente
          const isActive = currentChat.chat?.id === chat.id

          return (
            <div
              key={chat.id}
              className={`p-3 border-b cursor-pointer transition-colors ${
                isActive ? 'bg-hero-purple/10' : 'hover:bg-gray-50'
              }`}
              onClick={() => setCurrentChatId(chat.id)}
            >
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12">
                  <Image
                    src={otherPerson.imageProfile || '/placeholder-avatar.png'}
                    alt={otherPerson.name}
                    fill
                    className="object-cover rounded-full"
                  />
                  {(chat.unreadCount ?? 0) > 0 && (
                    <div className="absolute -top-1 -right-1 bg-hero-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {chat.unreadCount}
                    </div>
                  )}
                </div> 
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-Title truncate">{otherPerson.name}</h3>
                    {chat.lastMessageAt && (
                      <span className="text-xs text-gray-500">
                        {formatDistanceToNow(new Date(chat.lastMessageAt), {
                          addSuffix: true,
                          locale: es,
                        })}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 truncate font-Text">
                    {chat.lastMessageContent || 'Sin mensajes aún'}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}