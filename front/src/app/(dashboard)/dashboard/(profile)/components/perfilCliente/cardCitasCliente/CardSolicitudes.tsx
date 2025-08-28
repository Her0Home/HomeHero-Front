import { Card, CardContent, CardHeader } from "@/components/ui/card";
import DialogCliente from "./DialogCliente";
import { IAppointment } from "@/types/appointments";

interface CardProps {
  idUser: string | undefined;
  appointment : IAppointment
  
}
 
const CardSolicitudesCliente = ({
  idUser,
  appointment
}: CardProps

) => {
  return ( 
    <Card className="flex flex-row justify-center items-center">
      <CardHeader>
        <p className="font-Text font-semibold">Profesional:</p>
        <p> {appointment.professional.name || "Nombre del profesional"} </p>
        <p >Servicio:</p>
        <p>{appointment.startTime || "Servicio de el profesional"}</p>
      </CardHeader>

      <CardContent>
      <DialogCliente/>
      </CardContent>

    </Card>

   );
}
 
export default CardSolicitudesCliente;