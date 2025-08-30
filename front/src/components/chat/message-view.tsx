"use client"

import { useEffect, useRef } from 'react'
import { useChat } from '@/context/chatContex'
import { useAuth } from '@/context/authcontext'
import { MessageBubble } from './message-bubles'
import { MessageInput } from './input-message'
import { ArrowLeft, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export function MessageView() {
  const { currentChat, loading, setCurrentChatId } = useChat()
  const { user } = useAuth()
  const messagesEndRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [currentChat.messages]);
  

  if (!currentChat.chat) {
    return (
      <div className="flex flex-col h-full items-center justify-center p-4">
        <MessageCircle className="h-12 w-12 text-hero-gray mb-2" />
        <h3 className="text-lg font-Title text-hero-gray">Selecciona un chat</h3>
        <p className="text-sm text-center text-hero-gray font-Text">
          Selecciona una conversación para comenzar a chatear.
        </p>
      </div>
    )
  }
  

  const isClient = user?.id === currentChat.chat.cliente.id
  const otherPerson = isClient ? currentChat.chat.profesional : currentChat.chat.cliente
  
  return (
    <div className="flex flex-col h-full">
      {/* Cabecera del chat */}
      <div className="border-b p-3 flex items-center space-x-3">
        <button
          onClick={() => setCurrentChatId(null)}
          className="md:hidden text-hero-gray hover:text-hero-purple"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="relative w-10 h-10">
          <Image
            src={otherPerson.imageProfile || '/placeholder-avatar.png'}
            alt={otherPerson.name}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <div>
          <h3 className="font-Title">{otherPerson.name}</h3>
          <p className="text-xs text-gray-500 font-Text">
            {isClient ? 'Profesional' : 'Cliente'}
          </p>
        </div>
      </div>
      
      {/* Área de mensajes */}
      <div className="flex-1 overflow-y-auto p-4">
        {loading ? (
          <div className="flex h-full items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-hero-orange"></div>
          </div>
        ) : currentChat.messages.length === 0 ? (
          <div className="flex flex-col h-full items-center justify-center text-center p-4">
            <MessageCircle className="h-10 w-10 text-hero-gray mb-2" />
            <h3 className="text-lg font-Title text-hero-gray">No hay mensajes</h3>
            <p className="text-sm text-hero-gray font-Text">
              Envía el primer mensaje para comenzar la conversación.
            </p>
          </div>
        ) : (
          currentChat.messages.map((message, index) => {

            const isFirst =
              index === 0 ||
              currentChat.messages[index - 1].sender.id !== message.sender.id
            
            return (
              <MessageBubble
                key={message.id}
                id={message.id}
                content={message.content}
                sentAt={message.sentAt}
                isRead={message.isRead}
                sender={message.sender}
                isFirst={isFirst}
              />
            )
          })
        )}
        <div ref={messagesEndRef} />
      </div>
      <MessageInput />
    </div>
  )
}