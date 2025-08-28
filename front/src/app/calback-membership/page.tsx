"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authcontext";
import { routes } from "@/routes";
import Swal from "sweetalert2";
import NameLogo from "@/components/Logo/logo";
import { RotateCw } from "lucide-react";
import { GetMembershipInfo } from "@/services/Stripe"; // ajusta la ruta según tu proyecto
import { itemsNavs } from "@/constants";

export default function MembershipCallbackPage() {
  const { updateMembershipStatus, token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const verifyMembership = async () => {
      if(!token)return
      try {
        const response = await GetMembershipInfo(token); // llamas tu servicio
        // asumimos que response tiene la forma { active: boolean, ... }
        if (response?.data?.active) {
          // actualizas el estado en auth
          updateMembershipStatus(true);

          // alerta de éxito
          await Swal.fire({
            icon: "success",
            title: "Pago exitoso",
            text: "Tu membresía ha sido activada correctamente.",
          });

          router.push(itemsNavs.editarPerfil.href);
        } else {
          // alerta de fallo
          await Swal.fire({
            icon: "error",
            title: "Pago rechazado",
            text: "No se pudo activar tu membresía, inténtalo de nuevo.",
          });
          router.push(routes.membership);
        }
      } catch (error) {
        console.error("Error verificando membresía:", error);
        await Swal.fire({
          icon: "error",
          title: "Error",
          text: "Ocurrió un problema al verificar tu pago. Intenta de nuevo.",
        });
        router.push(routes.membership);
      }
    };

    verifyMembership();
  }, []);

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center bg-hero-">
      <NameLogo className1="animate-pulse" />
      <div className="flex flex-col items-center p-4">
        <h1 className="text-2xl font-bold font-Title">
          Verificando tu Pago...
        </h1>
        <div className="animate-spin">
          <RotateCw />
        </div>
        <p className="mt-2 font-Text text-gray-600">
          Por favor, espera un momento.
        </p>
      </div>
    </div>
  );
}
