import { IUser } from "@/types/users";
import { FC } from "react";
import InfoGen from "../InfoGen";
import PerfilCard from "../perfilPro/PerfilCard";
import LateralCliente from "./LateralCliente";
import UltimasCitas from "./UltimasCitas";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { itemsNavs } from "@/constants";

interface PerfilClienteProps {
  user: IUser | undefined;
}

const PerfilCliente: FC<PerfilClienteProps> = ({
  user,
}: PerfilClienteProps) => {
  return (
    <div className="flex flex-row gap-2">
{/* 
      {user?.isVerified === false && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <Card className="bg-red-50 border border-red-300 text-red-800 p-6 rounded-xl shadow-lg max-w-md w-full text-center">
            <h2 className="text-xl font-semibold mb-2">⚠️ Perfil incompleto</h2>
            <p className="text-sm">
              Para poder acceder a los servicios, primero debes completar los
              datos de tu perfil.
            </p>
            <p className="text-sm mt-1">
              Verifica tu información personal y asegúrate de que esté
              actualizada.
            </p>
            <Button
              variant={"outline"}
              className="text-hero-orange  border-hero-orange"
              asChild
            >
              <Link href={itemsNavs.editarPerfil.href}>Completar Perfil</Link>
            </Button>
          </Card>
        </div>
      )} */}

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
