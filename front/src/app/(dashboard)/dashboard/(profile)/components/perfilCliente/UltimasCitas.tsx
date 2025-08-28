import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import CardSolicitudesCliente from "./cardCitasCliente/CardSolicitudes";
import { FC } from "react";
import { IAppointment } from "@/types/appointments";
import { AppointmentStatus } from "@/types";

interface UltimaCitasProps {
  idUser: string | undefined;
  appointments: IAppointment[];
}

const UltimasCitas: FC<UltimaCitasProps> = ({
  idUser,
  appointments,
}: UltimaCitasProps) => {
  return (
    <div>
      <div>
        <Card>
          <CardHeader>
            <p className="text-2xl font-Title">Proximas Citas </p>
          </CardHeader>
          <CardContent className="p-2 max-h-80 w-11/12 overflow-y-auto rounded-md bg-hero-gray mx-auto">
            <div className="flex flex-col gap-2">
              {appointments
                .filter((a) => a.status === AppointmentStatus.CONFIRMED)
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

export default UltimasCitas;
