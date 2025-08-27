"use server";

import { LoginUserDTO, RegisterUserDTO } from "@/types/users";
import { axiosApiBack } from ".";
import { LogInServiceResponse } from "@/types";


export const postRegister = async (data: RegisterUserDTO) => {
  try {
    const res = await axiosApiBack.post("/users", data);
    if (!res.data) {
      console.warn("No se pudo registrar el usuario", res.data);
      return {
        message: "No se pudo registrar el usuario",
        errors: res.data,
      };
    }
    return { message: "Usuario registrado correctamente" };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.warn("Error registering user:", error?.message);
      return {
        message: "Error al registrar el usuario",
        errors: (error).message || "Error desconocido",
      };
    }
  }
};

export const postLogin = async (
  data: LoginUserDTO
): Promise<LogInServiceResponse|undefined> => {
  try {
    const res = await axiosApiBack.post("/auth/logIn", data);
    if (!res.data) {
      console.warn("invalid post login format", res.data);
      return {
        message: "No se pudo iniciar sesión",
        errors: res.data,
      };
    }    
    return {
      message: "Usuario inició sesión correctamente", 
      data: res.data 
    };

  } 
  catch (e: unknown) {
    if (e instanceof Error) {
      console.warn("Error logging in user:", e?.message);
      return {
        message: "Error al iniciar sesión",
        errors: (e ).message || "Error desconocido",
      };
    }
  }
};

