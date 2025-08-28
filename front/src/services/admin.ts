'use server'
import { IUser } from '@/types/users'
import { axiosApiBack } from '.'
import { AxiosResponse } from 'axios'


export const getAllUsers = async (token: string): Promise<IUser[] | null> => {
  try {
    const res = await axiosApiBack.get('/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!res.data || !Array.isArray(res.data)) {
      console.warn('Respuesta inesperada en getUsers:', res.data)
      return null
    }

    return res.data
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.warn('Error al obtener usuarios:', e.message)
    }
    return null
  }
}

export const banUser = async (userId: string, token: string): Promise< any| undefined> => {
  try {
    const res: AxiosResponse = await axiosApiBack.put(`/users/${userId}/ban`,{}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    
if (res.data) {
    return res.data
  }
  } catch (error: any) {
    return error.response?.data || error.message
  }
}