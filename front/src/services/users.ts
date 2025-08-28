"use server";

import { axiosApiBack } from ".";
import { UserIdResponse } from "@/types";

export const getUser = async (
  id: string,
  token: string
): Promise<UserIdResponse | undefined> => {
  try {
    const res = await axiosApiBack.get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.data) {
      console.warn("No se pudo registrar el usuario", res.data);
      return {
        message: "Error a el obtener datos de el usuario",
        errors: res.data,
      };
    }
    return {
      message: "Usuario obtenido Correctamente",
      data: res.data,
    };
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.warn("Error logging in user:", e?.message);
      return {
        message: `Error al obtener datos Id ${id} Token: ${token}`,
        errors: e.message || "Error desconocido",
      };
    }
  }
};


export const putUserRole = async (
  rol: string,
  token: string | null
): Promise<any> => {
  if (!token) throw new Error("No se pudo actualizar el usuario, falta token");

  try {
    const res = await axiosApiBack.put(
      `/users/role`,
      { role: rol }, // ✅ enviar objeto, no string
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return res.data; // ✅ devolver directamente los datos del usuario
  } catch (e: any) {
    console.error("Error update in user:", e?.response?.data || e.message);
    throw e;
  }
};

export const getAppoinment = async (Id: string, token:string)=>{
  
  try{
    const res = await axiosApiBack.get(`/appointment/${Id}`,{
      headers:{ Authorization :`Bearer ${token}`  }
    })
    return res.data
  }
  catch(error: any) {
    console.error("Error al obtener comentarios:", error.response?.data || error.message)
    throw error
  }

}


