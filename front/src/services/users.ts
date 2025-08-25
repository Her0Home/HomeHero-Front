import {  axiosApiBack2 } from "."
import { UserIdResponse } from "@/types";


export const getUser = async (id:string, token:string): Promise<UserIdResponse | undefined> => {
  try{
    const res = await axiosApiBack2.get(`/users/${id}`,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    if (!res.data) {
      console.warn("No se pudo registrar el usuario", res.data);
      return {
        message: "Error a el obtener datos de el usuario",
        errors: res.data,
      };
    }
    return {
      message : "Usuario obtenido Correctamente",
      data : res.data
    }

  }
  catch(e:unknown){
    if (e instanceof Error) {
      console.warn("Error logging in user:", e?.message);
      return {
        message: `Error al obtener datos Id ${id} Token: ${token}`,
        errors: (e ).message || "Error desconocido",
      };
    }

    
  }

  
};

