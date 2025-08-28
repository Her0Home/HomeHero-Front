import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { FC } from "react";
import CardSolicitudesCliente from "./cardCitasCliente/CardSolicitudes";
import { IAppointment } from "@/types/appointments";
import { AppointmentStatus } from "@/types";

interface LateralClienteProps {
  idUser: string | undefined;
  appointments : IAppointment[]
  
}

const LateralCliente: FC<LateralClienteProps> = ({
  idUser,
  appointments
}: LateralClienteProps) => {
  
  return (
    <div className="w-1/3 flex flex-col gap-2">
      <div>
        <Card>
          <CardHeader>
            <p className="text-2xl font-Title ">Solicitudes </p>
          </CardHeader>
          <CardContent className="p-2 max-h-80 w-11/12 overflow-y-auto rounded-md bg-hero-gray mx-auto">
            <div className="flex flex-col gap-2">
            {appointments
                .filter((a) => a.status === AppointmentStatus.PENDING || a.status === AppointmentStatus.IN_PROGRESS)
                .map((appointment) => (
                  <CardSolicitudesCliente
                    key={appointment.id}
                    appointment={appointment}
                    idUser={idUser}
                  />
                ))}
            </div>
          </CardContent>

          <CardFooter className="mt-5"></CardFooter>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <p className="text-2xl font-Title">Servicios Finalizados</p>
          </CardHeader>
          <CardContent className="p-2 max-h-80 w-11/12 overflow-y-auto rounded-md bg-hero-gray mx-auto">
            <div className="flex flex-col gap-2">

            {appointments
                .filter((a) => a.status === AppointmentStatus.COMPLETED || a.status === AppointmentStatus.CANCELED)
                .map((appointment) => (
                  <CardSolicitudesCliente
                    key={appointment.id}
                    appointment={appointment}
                    idUser={idUser}
                  />
                ))}
            </div>
          </CardContent>
          <CardFooter className="mt-5"></CardFooter>

        </Card>
      </div>
    </div>
  );
};

export default LateralCliente;
