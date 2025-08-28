import { useAuth } from '@/context/authcontext'
import { formatDistanceToNow } from 'date-fns'
import { es } from 'date-fns/locale'
import { Check, CheckCheck } from 'lucide-react'
import Image from 'next/image'

interface MessageProps {
  id: string
  content: string
  sentAt: string
  isRead: boolean
  sender: {
    id: string
    name: string
    imageProfile: string
  }
  isFirst: boolean
}

export function MessageBubble({ content, sentAt, isRead, sender, isFirst }: MessageProps) {
  const { user } = useAuth()
  const isMine = user?.id === sender.id
  
  return (
    <div className={`flex ${isMine ? 'justify-end' : 'justify-start'} mb-2`}>
      <div className="flex max-w-[80%]">
        {!isMine && isFirst && (
          <div className="flex-shrink-0 mr-2 self-end mb-1">
            <div className="relative w-8 h-8">
              <Image
                src={sender.imageProfile || '/placeholder-avatar.png'}
                alt={sender.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
          </div>
        )}
        
        <div className={`flex flex-col ${!isMine && !isFirst ? 'ml-10' : ''}`}>
          {!isMine && isFirst && (
            <span className="text-xs text-gray-500 ml-1 mb-1">{sender.name}</span>
          )}
          <div
            className={`p-3 rounded-xl ${
              isMine
                ? 'bg-hero-purple text-white rounded-br-none'
                : 'bg-gray-100 text-gray-800 rounded-bl-none'
            }`}
          >
            <p className="font-Text">{content}</p>
          </div>
          
          <div className={`flex items-center mt-1 text-xs text-gray-500 ${isMine ? 'justify-end' : 'justify-start'}`}>
            <span>
              {formatDistanceToNow(new Date(sentAt), {
                addSuffix: true,
                locale: es
              })}
            </span>
            {isMine && (
              <span className="ml-1">
                {isRead ? (
                  <CheckCheck className="w-3 h-3 text-hero-orange" />
                ) : (
                  <Check className="w-3 h-3" />
                )}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}