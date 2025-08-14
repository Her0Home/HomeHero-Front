import React from "react";
import {
  Search,
  Zap,
  Home,
  Wrench,
  Scissors,
  PawPrint,
  Paintbrush,
  
} from "lucide-react"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Electricista",
      description: "Instalaciones, reparaciones y mantenimiento eléctrico",
      img: "https://ik.imagekit.io/ankxi835d/Home%20Hero/electricista.jpg?updatedAt=1754756810334"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Plomería",
      description: "Reparación de tuberías, grifos y sistemas de agua",
      img: "https://ik.imagekit.io/ankxi835d/Home%20Hero/plomeri%CC%81a.jpg?updatedAt=1754756810371"
    
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Limpieza",
      description: "Limpieza profunda y mantenimiento del hogar",
      img: "https://ik.imagekit.io/ankxi835d/Home%20Hero/aseo.jpg?updatedAt=1754756810409"
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Jardinería",
      description: "Cuidado de jardines y áreas verdes",
      img: "https://ik.imagekit.io/ankxi835d/Home%20Hero/jardineria.jpg?updatedAt=1754756810383"
      
     
    },
    {
      icon: <PawPrint className="w-8 h-8" />,
      title: "Paseo de Mascotas",
      description: "Cuidado y paseo profesional de mascotas",
      img: "https://ik.imagekit.io/ankxi835d/Home%20Hero/paseador-perros.jpg?updatedAt=1754756810322"
    },
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: "Pintura",
      description: "Pintura interior y exterior de espacios",
      img: "https://ik.imagekit.io/ankxi835d/Home%20Hero/pintura.jpg?updatedAt=1754756810337"
    },
  ]

 export const OurServices = () => {
return (
    <>
     <section id="servicios" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 font-Title md:text-4xl">Nuestros Servicios</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 font-Text">
              Profesionales especializados en diferentes áreas para cubrir todas las necesidades de tu hogar
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="transition-shadow cursor-pointer hover:shadow-lg">
                <CardContent className="p-6 ">
                  <div className="flex flex-col items-center justify-center">

                  <div className="flex flex-row justify-center gap-5">

                  <div className="mb-4 text-orange-500">{service.icon}</div>


                  <h3 className="mb-2 text-xl font-bold font-Title">{service.title}</h3>
                  </div>
                  <div className="relative h-40 mb-4 w-80 ">
                   <Image
                      src={service.img}
                      alt={service.title}
                    fill
                     className="object-cover rounded-md"
    />
                  </div>
                  <p className="mb-4 text-hero-black font-Text">{service.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                
                    
                  </div>
                  </div>
                    

                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
    
              <Button size="lg" className="text-white bg-blue-500 hover:bg-blue-600">
                <Search className="w-5 h-5 mr-2" />
                Ver Todos los Servicios
              </Button>
           
          </div>
        </div>
      </section>
    </>
  );
}