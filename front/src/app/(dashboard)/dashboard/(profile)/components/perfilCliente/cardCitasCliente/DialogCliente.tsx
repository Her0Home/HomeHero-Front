import { Button } from "@/components/ui/button";
import {
  DialogHeader,
  DialogFooter,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { AppointmentStatus } from "@/types";
import { IAppointment } from "@/types/appointments";

interface CardProps {
  idUser: string | undefined;
  appointment: IAppointment;
}

const DialogCliente = ({ appointment }: CardProps) => {
  const statusClass: Record<AppointmentStatus, string> = {
    [AppointmentStatus.CANCELED]: "text-red-500",
    [AppointmentStatus.COMPLETED]: "text-green-500",
    [AppointmentStatus.CONFIRMED]: "text-blue-500",
    [AppointmentStatus.IN_PROGRESS]: "text-hero-orange",
    [AppointmentStatus.PENDING]: "text-yellow-500",
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Ver más
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-Title text-3xl text-h">
            Info de la cita
          </DialogTitle>

          <p className="text-2xl font-Text">
            Profesional: <span className="text-xl">{appointment.client.name}</span>
          </p>
          <p className="text-2xl font-Text">
            Id de la Cita: <span className="text-xl">{appointment.id}</span>
          </p>
          <p className="text-2xl font-Text">
            Estado:{" "}
            <span className={`text-xl ${statusClass[appointment.status]}`}>
              {appointment.status}
            </span>
          </p>
        </DialogHeader>
        <DialogDescription>{appointment.description}</DialogDescription>
      
      </DialogContent>
    </Dialog>
  );
};

export default DialogCliente;
