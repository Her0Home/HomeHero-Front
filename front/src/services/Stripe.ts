"use server";

import { axiosApiBack } from ".";

interface DataLinkStripe {
  url : string | undefined
}

interface ResponseLinksStripe {
    message: string;
    data?: DataLinkStripe;
    errors?: any;

}

export const PostLinkStripe = async (Id: string, priceId: string, token:string):Promise<ResponseLinksStripe>  => {
  
  try{
    const res = await axiosApiBack.post(
      "/stripe/create-checkout-session",
      {
        userId: Id,
        priceId: priceId,
        successUrl: "http://localhost:3000/dashboard",
        cancelUrl: "http://localhost:3000/membresias",
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    
    if (!res.data) {
      console.warn("invalid post ", res.data);
      return {
        message: "No se pudo encontrar el link de pago",
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
      console.warn("Error creating Stripe link:", e.message);
      return {
        message: "Error al generar el link de Stripe",
        errors: e.message,
      };
    }
    return {
      message: "Error desconocido al generar el link de Stripe",
      errors: e,
    };
  }
}