export interface Message {
  id: string
  content: string
  sentAt: string
  isRead: boolean
  chat: {
    id: string
  }
  sender: {
    id: string
    name: string
    imageProfile: string
  }
}

export interface Chat {
  id: string
  lastMessageContent: string | null
  lastMessageAt: string | null
  appointment: {
    id: string
    status: string
  }
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
  messages?: Message[]
  unreadCount?: number
}