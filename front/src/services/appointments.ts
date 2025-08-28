'use server'
import { axiosApiBack } from "."
import axios from "axios"


export interface AppointmentPayload {
  clientId: string
  professionalId: string
  startTime: string // ISO format
  description?: string
  status?: "pending" | "confirmed" | "cancelled"
  imageFile?: string
}

export interface ReschedulePayload {
  appointmentId: string
  userId: string
  newStartTime: string
}

export const getAvailability = async (professionalId: string, date: string, token: string) => {
  try {
    const res = await axiosApiBack.get(`/appointment/schedule/${professionalId}/${date}`,{ 
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
// export const getAvailability = async (professionalId: string, date: string, token: string) => {
//   try {
//     const res = await axios.get(`https://homehero-back.onrender.com/appointment/schedule/665fcecc-9022-4384-98b1-26bd49d09d93/2025-08-29`,{ 
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     })
//     return res.data
//   } catch (error: any) {
//     if (axios.isAxiosError(error) && error.response?.status === 401) {
//       console.warn("No autorizado: revisá el token o la sesión")
//     }
//     throw error
//   }
// }


export const createAppointment = async (data: FormData, token: string) => { 
  const res = await axiosApiBack.post("/appointment", data, {
    headers: {
      Authorization: `Bearer ${token}`,
   
    },
  });

  return res.data;
};

// export const createAppointment = async (data: AppointmentPayload, token: string) => {
//   const res = await axios.post("https://homehero-back.onrender.com/appointment", data, {
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   })
//   return res.data
// }

export const getAppointments = async () => {
  const res = await axiosApiBack.get("/appointment")
  return res.data
}

export const getAppointmentById = async (id: string) => {
  const res = await axiosApiBack.get(`/appointment/${id}`)
  return res.data
}

export const confirmAppointment = async (id: string) => {
  const res = await axiosApiBack.put(`/appointment/confirm/${id}`)
  return res.data
}

export const rescheduleAppointment = async (id: string, data: ReschedulePayload) => {
  const res = await axiosApiBack.put(`/appointment/reschedule/${id}`, data)
  return res.data
}

export const cancelAppointment = async (id: string) => {
  const res = await axiosApiBack.put(`/appointment/cancel/${id}`)
  return res.data
}

export const finishAppointment = async (id: string, token: number) => {
  const res = await axiosApiBack.post(`/appointment/finish/${id}`, { token })
  return res.data
}