"use client"

import { useState } from 'react'
import { Send } from 'lucide-react'
import { useChat } from '@/context/chatContex'

export function MessageInput() {
  const [message, setMessage] = useState('')
  const { sendMessage, currentChat } = useChat()
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim() || !currentChat.chat) return
    
    try {
      await sendMessage(message)
      setMessage('')
    } catch (error) {
      console.error('Error al enviar mensaje:', error)
    }
  }
  
  if (!currentChat.chat) return null
  
  return (
    <form onSubmit={handleSubmit} className="border-t p-3">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe un mensaje..."
          className="flex-1 border rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-hero-purple"
        />
        <button
          type="submit"
          disabled={!message.trim()}
          className="bg-hero-orange text-white rounded-full p-2 hover:bg-hero-orange/90 disabled:opacity-50"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  )
}