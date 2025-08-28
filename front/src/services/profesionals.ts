'use server'
import { IProfessionalRating, IProfessionalSearch } from "@/types/professional"
import { axiosApiBack } from "."


export const getProDest = async (): Promise<IProfessionalRating[] | null> => {
  try {
    const res = await axiosApiBack.get<IProfessionalRating[]>("/users/rating/professionals")

    if (!res.data || !Array.isArray(res.data)) {
      console.warn("Respuesta inesperada en getProDest:", res.data)
      return null
    }

    return res.data
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.warn("Error al obtener profesionales:", e.message)
    }
    return null
  }
}

export const getProSearch = async (): Promise<IProfessionalSearch[] | null> => {
  try {
    const res = await axiosApiBack.get<IProfessionalSearch[]>("/users/rating/professionals")

    if (!res.data || !Array.isArray(res.data)) {
      console.warn("Respuesta inesperada en getProDest:", res.data)
      return null
    }

    return res.data
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.warn("Error al obtener profesionales:", e.message)
    }
    return null
  }
}
export const getProfessionalById = async (id: string): Promise<IProfessionalSearch | null> => {
  try {
    const res = await axiosApiBack.get<IProfessionalSearch>(`/users/profile/${id}`) 

    if (!res.data || typeof res.data !== "object") {
      console.warn("Respuesta inesperada en getProfessionalById:", res.data)
      return null
    }

    return res.data
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.warn("Error al obtener profesional:", e.message)
    }
    return null
  }
}

export const getLatestCommentsByProfessional = async (professionalId: string) => {
  if (!professionalId) throw new Error("El ID del profesional es obligatorio")

  try {
    const response = await axiosApiBack.get(
      `/comments/professional/${professionalId}/latest`
    )
    return response.data // debería ser un array de comentarios
  } catch (error: any) {
    console.error("Error al obtener comentarios:", error.response?.data || error.message)
    throw error
  }
}
