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
      successUrl: "https://home-hero-front.vercel.app/callback-membership",
      cancelUrl: "https://home-hero-front.vercel.app/membresias",
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
      message: "link de pago correcto", 
      data: res.data 
    };
    
  }
  
  catch (e: unknown) {
    if (e instanceof Error) {
      console.warn("Error creating Stripe link:", e.message);
      return {
        message: `Error al generar el link de Stripe      `,
        errors: e.message,
      };
    }
    return {
      message: `Error desconocido al generar el link de Stripe  `,
      errors: e,
    };
  }
}

interface DataInfoStripe {
  active: boolean;
  remaining: number;
  endDate: Date | null;
  isCancelled: boolean;
  subscriptionId: string;
}

interface ResponseInfoStripe {
    message: string;
    data?: DataInfoStripe;
    errors?: any;

}

export const GetMembershipInfo = async (token:string ):Promise<ResponseInfoStripe>=> {

  try {
    const res = await axiosApiBack.get("/stripe/membership-info",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    if (!res.data) {
      console.warn("invalid Info", res.data);
      return {
        message: "Informacion de Pago invalida",
        errors: res.data,
      };
    }    
    return {
      message: "Informacion de Pago invalida Correcta", 
      data: res.data 
    };
    

    
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.warn("Error creating Stripe link:", e.message);
      return {
        message: `Error al generar el link de Stripe        `,
        errors: e.message,
      };
    }
    return {
      message: `Error desconocido al obtener Informacion de Pago  `,
      errors: e,
    };
  }
}


export const PutMembershCancel = async (token:string, id:string )=> {

  try {
    const res = await axiosApiBack.get(`/stripe/cancel-subscription/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    if (!res.data) {
      console.warn("invalid post ", res.data);
      return {
        message: "No se pudo cancelar la membresia",
        errors: res.data,
      };
    }    
    return {
      message: "Cancelacion de mebresia Exitosa", 
      data: res.data 
    };
    

    
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.warn("Error creating Stripe link:", e.message);
      return {
        message: `Error al cancelar la membresia `,
        errors: e.message,
      };
    }
    return {
      message: `Error desconocido al cancelar la membresia `,
      errors: e,
    };
  }
}

