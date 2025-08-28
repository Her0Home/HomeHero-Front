import { Card, CardContent, CardHeader } from "@/components/ui/card";
import DialogCliente from "./DialogCliente";
import { IAppointment } from "@/types/appointments";
import { AppointmentStatus } from "@/types";
import { Button } from "@/components/ui/button";

interface CardProps {
  idUser: string | undefined;
  appointment: IAppointment;
}

const CardSolicitudesCliente = ({ idUser, appointment }: CardProps) => {
  return (
    <Card className="relative flex flex-row justify-center items-center">
      <div
        className={`absolute top-2 right-2 w-3 h-3 rounded-full ${
          appointment.status === AppointmentStatus.PENDING
            ? "bg-yellow-500"
            : appointment.status === AppointmentStatus.IN_PROGRESS
            ? "bg-hero-orange"
            : appointment.status === AppointmentStatus.COMPLETED
            ? "bg-hero-blue"
            : appointment.status === AppointmentStatus.CANCELED
            ? "bg-red-600"
            : appointment.status === AppointmentStatus.CONFIRMED
            ? "bg-green-500"
            : "bg-slate-400"
        }`}
      />
      <CardHeader>
        <p className="font-Text font-semibold">Profesional:</p>
        <p> {appointment.professional.name || "Nombre del profesional"} </p>
        <p>Servicio:</p>
        <p>{appointment.startTime || "Servicio de el profesional"}</p>
      </CardHeader>

      <CardContent className=" flex flex-col gap-2">
        <DialogCliente appointment={appointment} idUser={idUser} />
        {appointment.status === AppointmentStatus.PENDING ||
        appointment.status === AppointmentStatus.IN_PROGRESS ? (
          <>
            <Button variant="destructive">Cancelar</Button>
            <Button className="bg-green-500">Aceptar</Button>
          </>
        ) : appointment.status === AppointmentStatus.CONFIRMED ? (
          <Button variant="destructive">Cancelar</Button>
        ) : null}
      </CardContent>
    </Card>
  );
};

export default CardSolicitudesCliente;
