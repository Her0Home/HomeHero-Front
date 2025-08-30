import { axiosApiBack2 as  axiosApiBack } from "."
import axios from "axios"
import { io, type Socket } from "socket.io-client";

let socket: Socket | null = null

export const initSocket = () => {
  if (!socket) {
    const SOCKET_URL = process.env.NEXT_PUBLIC_API_URL || 'https://homehero-back.onrender.com'
    socket = io(SOCKET_URL, {
      withCredentials: false,
      transports: ['websocket']
    })
    
    socket.on('connect', () => {
      console.log('Socket conectado:', socket?.id)
    })
    
    socket.on('disconnect', () => {
      console.log('Socket desconectado')
    })
  }
  return socket
}

export const joinChatRoom = (chatId: string) => {
  const socket = initSocket()
  socket.emit('join_room', chatId)
}

export const leaveChatRoom = (chatId: string) => {
  const socket = initSocket()
  socket.emit('leave_room', chatId)
}

export const getUserChats = async (token: string) => {
  try {
    const res = await axiosApiBack.get('/chats', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res.data
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      console.warn("No autorizado: revisá el token o la sesión")
    }
    throw error
  }
}

export const getChatById = async (chatId: string, token: string) => {
  try {
    const res = await axiosApiBack.get(`/chats/${chatId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res.data
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      console.warn("No autorizado: revisá el token o la sesión")
    }
    throw error
  }
}

export const sendMessage = async (chatId: string, content: string, token: string) => {
  try {
    const res = await axiosApiBack.post('messages', {
      chatId,
      content
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return res.data
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      console.warn("No autorizado: revisá el token o la sesión")
    }
    throw error
  }
}