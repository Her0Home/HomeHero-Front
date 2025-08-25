"use client";
import { JSX, useEffect, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import SelectRole from "./components/SelectRole/selectRole";
import { Role } from "@/types";
import { useAuth } from "@/context/authcontext";
import { getUser } from "@/services/users";
import { IUser } from "@/types/users";
import PerfilPro from "./components/perfilPro/PerfilPro";
import PerfilCliente from "./components/perfilCliente/PerfilCliente";

const Perfil = () => {
  const { user, token } = useAuth();
  const [userData, setUserData] = useState<IUser | undefined>();

  useEffect(() => {
    const fetchUser = async () => {
      if (!user?.id || !token) return;

      try {
        const data = await getUser(user.id, token);
        setUserData(data?.data); // ✅ Aquí tenés el objeto completo
        console.log("Objeto completo del usuario:", data);
      } catch (error) {
        console.error("Error al obtener el usuario:", error);
      }
    };

    fetchUser();
  }, [user?.id, token]);
  console.log("Objeto completo del usuario?:", userData);

  let perfilComponent: JSX.Element | null = null;

  if (userData?.role === Role.unknown) {
    perfilComponent = <SelectRole />;
  } else if (userData?.role === Role.PROFESSIONAL) {
    perfilComponent = <PerfilPro user={userData} />;
  } else if (userData?.role === Role.CLIENTE) {
    perfilComponent = <PerfilCliente user={userData} />;
  } else {
    perfilComponent = (
      <div className="flex flex-col items-center justify-center h-full text-center px-4 py-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          No pudimos cargar tu perfil
        </h1>
        <p className="text-lg text-gray-600 max-w-md">
          Lo sentimos mucho. Hubo un problema al obtener tus datos de usuario.
          Por favor, intenta recargar la página o vuelve más tarde.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <SiteHeader label="Perfil" />

      <div className="p-5 ">
        <div>{perfilComponent}</div>
      </div>
    </div>
  );
};

export default Perfil;
