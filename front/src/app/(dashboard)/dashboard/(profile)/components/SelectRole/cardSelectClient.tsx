import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { FC } from "react";

export const CardSelectClient: FC = () => {
  return (
    <Card className="w-2/5 border bg-hero-orange text-hero-white flex flex-col items-center
      transition-all duration-1000 ease-in-out hover:scale-105 hover:shadow-xl
    ">
      <CardHeader>
        <CardTitle >
          ¿Necesitas ayuda en tu hogar?
        </CardTitle>
      </CardHeader>
      <CardDescription className="p-3 text-justify font-Text text-hero-white  ">
        En nuestra plataforma encontrarás trabajadores confiables y capacitados
        en limpieza, plomería, electricidad, reparaciones, jardinería y mucho
        más. Podrás elegir al profesional que mejor se adapte a tus necesidades
        y agendar el servicio de manera rápida y segura.
      </CardDescription>
      <CardContent className="relative w-4/5 h-48   flex items-center justify-center ">
          <Image 
            alt="Profesional" 
            src={"https://ik.imagekit.io/ankxi835d/Home%20Hero/trato.jpg?updatedAt=1755904116208"}
            fill
            className="  object-cover   rounded-md "
            />
      </CardContent>
      <CardFooter className="justify-center flex flex-col">
        <p className="text-center">
          Elige esta opción si deseas contratar servicios para tu hogar.
          <br />
          👇
        </p>

        <Button variant={"ghost"}>Necesito Un Ayudante</Button>
      </CardFooter>
    </Card>
  );
};
