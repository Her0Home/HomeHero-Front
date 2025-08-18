'use server';

import axios from "axios";
import { LogInServiceResponse } from "@/helpers/page";
import { LoginUserDTO, RegisterUserDTO } from "@/types/users";

const axiosApiBack = axios.create({
  baseURL: process.env.API_URL, 
  });
   export const postRegister = async (data: RegisterUserDTO) => {
    try {
      const res = await axiosApiBack.post('/users/register', data);
if (!res.data) {
  console.warn('No se pudo registrar el usuario',res.data);
  return {
    message: 'No se pudo registrar el usuario',
    errors: res.data
  }
}
return { message: 'Usuario registrado correctamente',};
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.warn("Error registering user:", error?.message);
        return {
          message: 'Error al registrar el usuario',
          errors: (error as Error).message || 'Error desconocido'
        };
      }
    }
  };
  export const postLogin = async (data: LoginUserDTO):Promise<LogInServiceResponse> => {
    try {
      const res = await axiosApiBack.post('/auth/logIn', data);
if (!res.data) {
  console.warn('invalid post login format',res.data);
  return {
    message: 'No se pudo iniciar sesión',
    errors: res.data
  }
}
return { message: 'Usuario inició sesión correctamente',
  data: res.data,
};
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.warn("Error logging in user:", error?.message);
        return {
          message: 'Error al iniciar sesión',
          errors: (error as Error).message || 'Error desconocido'
        };
      }
    }
  };