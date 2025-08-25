import { IUser } from "@/types/users";
import { FC } from "react";
import ComentariosPro from "../perfilPro/ComentariosPro";
import InfoGen from "../perfilPro/InfoGen";
import PerfilCard from "../perfilPro/PerfilCard";
import LateralCliente from "./LateralCliente";
import UltimasCitas from "./UltimasCitas";


interface PerfilClienteProps {
  user: IUser | undefined;
}

const PerfilCliente: FC<PerfilClienteProps> = ({ user }: PerfilClienteProps) => {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-col w-3/4  gap-2 h-fit">
        <div className="flex gap-2">
          <PerfilCard user={user} />
          <InfoGen user={user} />
        </div>


        <UltimasCitas />
      </div>

      <LateralCliente idUser={user?.id} />
    </div>
  );
};

export default PerfilCliente;
