"use server"
import { axiosApiBack } from "."
import axios from "axios"

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
