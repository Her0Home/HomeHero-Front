import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { FC } from "react";

interface Props  {
  handleOnClick: () => Promise<void>;
}


export const CardSelectPro:FC<Props> = (
  {handleOnClick}
)=>{
return(
  <Card className="w-2/5 bg-hero-blue text-hero-white flex flex-col items-center 
  transition-all duration-1000 ease-in-out hover:scale-105 hover:shadow-xl
  ">
  <CardHeader>
    <CardTitle >
      ¿Quieres ofrecer tus servicios en nuestra plataforma?
    </CardTitle>
  </CardHeader>

  <CardDescription className="p-4 text-justify font-Text  text-hero-white ">
    Si eres trabajador de servicios para el hogar, aquí encontrarás el
    espacio perfecto para conectar con clientes que necesitan tu ayuda.
    Podrás registrarte como proveedor, mostrar tus habilidades y empezar
    a recibir solicitudes de trabajo de manera sencilla.
  </CardDescription>
  <CardContent className="relative w-4/5 h-48   flex items-center justify-center ">
    <Image 
    alt="Profesional" 
    src={"https://ik.imagekit.io/ankxi835d/Home%20Hero/pintura.jpg?updatedAt=1754756810337"}
    height={100}
    width={600}
    className="  object-cover   rounded-md "
    />
  </CardContent>
  <CardFooter className="justify-center flex flex-col">
    <p className="text-center">Elige esta opción si deseas trabajar con nosotros y ofrecer tus servicios. <br/>👇</p>
    <Button variant={"ghost"} onClick={handleOnClick} className=" hover:text-hero-blue">
      Quiero Trabajar
    </Button>
  </CardFooter>
</Card >

)
}