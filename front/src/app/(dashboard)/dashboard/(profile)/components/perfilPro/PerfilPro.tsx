import { IUser } from "@/types/users";
import { FC } from "react";
import ComentariosPro from "./ComentariosPro";
import DescripcionPro from "./DescripcionPro";
import InfoGen from "./InfoGen";
import PerfilCard from "./PerfilCard";
import LateralPro from "./CitasPro";

interface PerfilProProps {
  user: IUser | undefined;
}

const PerfilPro: FC<PerfilProProps> = ({ user }: PerfilProProps) => {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-col w-3/4  gap-2 h-fit">
        <div className="flex gap-2">
          <PerfilCard user={user} />
          <InfoGen user={user} />
        </div>

        <DescripcionPro descripcion={user?.description} />

        <ComentariosPro />
      </div>

      <LateralPro idUser={user?.id} />
    </div>
  );
};

export default PerfilPro;
