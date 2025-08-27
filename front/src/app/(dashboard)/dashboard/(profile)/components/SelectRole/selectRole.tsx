import { FC } from "react";
import { CardSelectPro } from "./cardSelectPro";
import { CardSelectClient } from "./cardSelectClient";
import { putUserRole } from "@/services/users";
import { useAuth } from "@/context/authcontext";
import { useRouter } from "next/navigation";
import { routes } from "@/routes";
import { itemsNavs } from "@/constants";

const SelectRole: FC = () => {
  const { token, updateUser } = useAuth();

  const router = useRouter();

  const handleOnSubmit = async (role: string) => {
    if (!token) {
      console.error("Token no disponible");
      return;
    }
  
    try {
      const resUser = await putUserRole(role, token);
      updateUser(resUser);

      if (role === "profesional") {
        router.push(routes.membership);
      } else {
        router.push(itemsNavs.editarPerfil.href);
      }
    } catch (error) {
      console.error("Error al asignar rol:", error);
    }
  };

  return (
    <div className="p-5 ">
      <h2 className="text-center font-Text font-semibold tracking-widest   text-xl ">
        Selecciona el servicio que deseas utilizar
      </h2>
      <div className="flex flex-row justify-evenly p-3">
        <CardSelectPro handleOnClick={()=>handleOnSubmit("profesional")} />

        <CardSelectClient handleOnClick={()=>handleOnSubmit("cliente")} />
      </div>
    </div>
  );
};

export default SelectRole;
