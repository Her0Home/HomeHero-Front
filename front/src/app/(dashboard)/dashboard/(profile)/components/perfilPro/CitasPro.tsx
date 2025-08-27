import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FC } from "react";
import CardPendientesProfile from "./cardPendientesProfile";

interface CitasProProps {
  idUser: string | undefined;
}

const LateralPro: FC<CitasProProps> = ({ idUser }: CitasProProps) => {
  return (
    <div className="w-1/3 flex flex-col gap-2">
      <div>
        <Card>
          <CardHeader>
            <p className="text-2xl font-Title ">Solicitudes </p>
          </CardHeader>
          <CardContent className="p-2 max-h-80 w-11/12 overflow-y-auto rounded-md bg-hero-gray mx-auto">
            <div className="flex flex-col gap-2">
              <CardPendientesProfile />
              <CardPendientesProfile />

              <CardPendientesProfile />
              <CardPendientesProfile />
            </div>
          </CardContent>

          <CardFooter className="mt-5" ></CardFooter>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <p className="text-2xl font-Title">Citas Pendientes</p>
          </CardHeader>
          <CardContent className="p-2 max-h-80 w-11/12 overflow-y-auto rounded-md bg-hero-gray mx-auto">
            <div className="flex flex-col gap-2">
              <CardPendientesProfile />
              <CardPendientesProfile />

              <CardPendientesProfile />
              <CardPendientesProfile />
            </div>
          </CardContent>
          <CardFooter className="mt-5" ></CardFooter>

        </Card>
      </div>
    </div>
  );
};

export default LateralPro;
