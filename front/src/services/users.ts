import { IUserResponse } from "@/types/users";
import { axiosApiBack } from "."


export const getUser = async (token: string): Promise<IUserResponse | null> => {
  if (!token || typeof token !== "string") {
    console.warn("Token inválido en getUser");
    return null;
  }
  try {
    const res = await axiosApiBack.get<IUserResponse>("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.data) {
      console.warn("No se pudo obtener el usuario", res.data);
      return null;
    }

    return res.data;
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.warn("Error fetching user data:", e.message);
    }
    return null;
  }
};

