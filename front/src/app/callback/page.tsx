"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authcontext";
import { routes } from "@/routes";
import Swal from "sweetalert2";
import NameLogo from "@/components/Logo/logo";
import {
  RotateCw,
} from "lucide-react";

export default function AuthCallbackPage() {
  const { saveUserData } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const fetchProfileAndSetToken = async () => {
      try {
        const response = await fetch('https://homehero-back.onrender.com/auth0/profile', {
          credentials: 'include',
        });

        if (!response.ok) {
          router.push(routes.login);
          
          Swal.fire({
            icon: "error",
            title: "Error a el verificar la sesión",
            text: "Hubo un problema al iniciar tu sesión. Por favor, inténtalo de nuevo."

          })
          throw new Error('No se pudo verificar la sesión');
          
        } 
        
        const data = await response.json();

        saveUserData(data);

        router.push(routes.dashboard);

        await Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "¡Bienvenido de nuevo!",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });


      } catch (error) {
        console.error("Error en el callback de autenticación:", error);
        Swal.fire({
          icon: "error",
          title: "Error de autenticación",
          text: "Hubo un problema al iniciar tu sesión. Por favor, inténtalo de nuevo.",
        });

        router.push(routes.login);
      }
    };

    fetchProfileAndSetToken();

  }, [saveUserData, router]);

  return (
    <div className="flex  flex-col h-screen w-full items-center justify-center bg-hero-">
      <NameLogo className1="animate-pulse" />
      <div className="flex flex-col items-center p-4">
        <h1 className="text-2xl font-bold font-Title">
          Verificando tu sesión...
        </h1>
        <div className="animate-spin ">
          <RotateCw />
        </div>
        <p className="mt-2 font-Text text-gray-600">
          Por favor, espera un momento.
        </p>
      </div>
    </div>
  );
}
