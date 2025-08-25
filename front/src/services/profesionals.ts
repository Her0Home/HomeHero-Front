import { IProfessionalRating } from "@/types/users"
import { axiosApiBack } from "."


export const getPro = async (): Promise<IProfessionalRating[] | null> => {
  try {
    const res = await axiosApiBack.get<IProfessionalRating[]>("/users/rating/professionals")

    if (!res.data || !Array.isArray(res.data)) {
      console.warn("Respuesta inesperada en getPro:", res.data)
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