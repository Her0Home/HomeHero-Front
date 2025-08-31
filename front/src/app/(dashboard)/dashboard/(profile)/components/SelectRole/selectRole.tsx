"use client";

import { FC } from "react";
import { CardSelectPro } from "./cardSelectPro";
import { CardSelectClient } from "./cardSelectClient";
import { putUserRole } from "@/services/users";
import { useAuth } from "@/context/authcontext";
import { useRouter } from "next/navigation";
import { routes } from "@/routes";
import { itemsNavs } from "@/constants";
import Swal from "sweetalert2";

const SelectRole: FC = () => {
  const { token, updateUser } = useAuth();
  const router = useRouter();

  const handleOnSubmit = async (role: string) => {
    if (!token) {
      console.error("Token no disponible");
      Swal.fire("Error", "Tu sesión ha expirado, por favor inicia sesión de nuevo.", "error");
      return;
    }
  
    try {
      // 1. Llamamos a la API. 'apiResponse' ahora contiene el objeto { access_token, user }
      const apiResponse = await putUserRole(role, token);

      // 2. Extraemos el objeto 'user' que está dentro de la respuesta
      const updatedUser = apiResponse.user;

      // 3. Validamos que el objeto 'updatedUser' exista y tenga los datos correctos
      if (updatedUser && updatedUser.id && updatedUser.role === role) {
        
        // 4. Pasamos únicamente el objeto 'updatedUser' a la función del contexto
        updateUser(updatedUser);

        if (role === "profesional") {
          router.push(routes.membership);
        } else {
          router.push(itemsNavs.editarPerfil.href);
        }
      } else {
        // Este error se mostrará si la respuesta de la API no tiene la estructura esperada
        console.error("La respuesta de la API no contenía un objeto de usuario válido:", apiResponse);
        Swal.fire({
          icon: 'error',
          title: 'Error al actualizar tu rol',
          text: 'No pudimos confirmar la actualización. Por favor, recarga la página e intenta de nuevo.'
        });
      }
    } catch (error) {
      console.error("Error al asignar rol:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error Inesperado',
        text: 'Ocurrió un problema al intentar cambiar tu rol.'
      });
    }
  };

  return (
    <div className="p-5 ">
      <h2 className="text-center font-Text font-semibold tracking-widest   text-xl ">
        Selecciona el servicio que deseas utilizar
      </h2>
      <div className="flex flex-row justify-evenly p-3">
        <CardSelectPro handleOnClick={() => handleOnSubmit("profesional")} />
        <CardSelectClient handleOnClick={() => handleOnSubmit("cliente")} />
      </div>
    </div>
  );
};

export default SelectRole;