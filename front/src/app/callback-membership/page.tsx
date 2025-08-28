"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authcontext";
import { routes } from "@/routes";
import Swal from "sweetalert2";
import NameLogo from "@/components/Logo/logo";
import { RotateCw } from "lucide-react";
import { GetMembershipInfo } from "@/services/Stripe"; 
import { itemsNavs } from "@/constants";

export default function MembershipCallbackPage() {
  const { updateMembershipStatus, token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log("[MembershipCallback] useEffect iniciado");

    const verifyMembership = async () => {
      console.log("[MembershipCallback] verifyMembership iniciado");

      if (!token) {
        console.log("[MembershipCallback] No hay token disponible");
        return;
      }
      console.log("[MembershipCallback] Token:", token);

      try {
        const response = await GetMembershipInfo(token);
        console.log("[MembershipCallback] Respuesta de GetMembershipInfo:", response);

        if (response?.data?.active) {
          console.log("[MembershipCallback] Membresía activa: true");

          updateMembershipStatus(true);
 
          Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "¡Pago Exitoso!",
          text: "Mebresia activada con exito",
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
        });
        

          console.log("[MembershipCallback] Redirigiendo a dashboard");
          router.push(itemsNavs.editarPerfil.href);
        } else {
          console.log("[MembershipCallback] Membresía activa: false o respuesta inválida");

          await Swal.fire({
            icon: "error",
            title: "Pago rechazado",
            text: "No se pudo activar tu membresía, inténtalo de nuevo.",
          });

          console.log("[MembershipCallback] Redirigiendo a membresías");
          router.push(routes.membership);
        }
      } catch (error) {
        console.error("[MembershipCallback] Error verificando membresía:", error);

        await Swal.fire({
          toast: true,
          icon: "error",
          title: "Error",
          timer: 5000,
          timerProgressBar: true,
          showConfirmButton: false,

          text: "Ocurrió un problema al verificar tu pago. Intenta de nuevo.",
        });

        console.log("[MembershipCallback] Redirigiendo a membresías por error");
        router.push(routes.membership);
      }
    };

    verifyMembership();
  }, [token, router, updateMembershipStatus]);

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
