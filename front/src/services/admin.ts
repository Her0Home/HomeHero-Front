'use server'
import { IUser } from '@/types/users'
import { axiosApiBack } from '.'


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