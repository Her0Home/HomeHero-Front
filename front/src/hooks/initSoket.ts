"use client"

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




