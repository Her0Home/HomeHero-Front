
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { generateUrl } from "@/utils/gerateURL"
import { routes } from "@/routes"
 export const professionals1 = [
    {
      id: 1,
      name: "Carlos Mendoza",
      specialty: "Electricista",
      rating: 4.9,
      reviews: 127,
      image: "https://ik.imagekit.io/ankxi835d/Home%20Hero/electricistaProfile.jpg?updatedAt=1754778578455",
      verified: true,
      experience: "8 años",
    },
    {
      id: 2,
      name: "María González",
      specialty: "Limpieza",
      rating: 4.8,
      reviews: 89,
      image: "https://ik.imagekit.io/ankxi835d/Home%20Hero/aseoProfile.jpg?updatedAt=1754778577652",
      verified: true,
      experience: "5 años",
    },
    {
      id: 3,
      name: "Roberto Jiménez",
      specialty: "Plomería",
      rating: 4.9,
      reviews: 156,
      image: "https://ik.imagekit.io/ankxi835d/Home%20Hero/plomeroPerfil.jpg?updatedAt=1754778343505",
      verified: true,
      experience: "12 años",
    },
  ]

export  const SectionProfesional = () => {
return (

<section id="profesionales" className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 font-Title md:text-4xl">
              Profesionales Destacados
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 font-Text">
              Conoce a algunos de nuestros profesionales mejor calificados
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {professionals1.map((professional) => (
              <Card key={professional.id} className="transition-shadow hover:shadow-lg" >
                <CardContent className="p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded -full">
                    <Image
                      src={professional.image}
                      alt={professional.name}
                      fill
                      className="object-cover "
                    />
                    {professional.verified && (
                      <div className="absolute flex items-center justify-center w-6 h-6 bg-green-500 rounded-full -top-1 -right-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <h3 className="mb-1 text-lg font-bold font-Title">{professional.name}</h3>
                  <p className="mb-2 text-orange-600 font-Title">{professional.specialty}</p>
                  <div className="flex items-center justify-center mb-2 space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-semibold">{professional.rating}</span>
                    <span className="text-gray-500">({professional.reviews} reseñas)</span>
                  </div>
                  <p className="mb-4 text-sm text-gray-600">{professional.experience} de experiencia</p>
                  <Link href={generateUrl(professional.id, routes.pro_detail, professional.name)}>
                    <Button className="w-full text-white bg-orange-500 hover:bg-orange-600">Ver Perfil</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/buscar">
              <Button size="lg" variant="outline" className="bg-transparent">
                Ver Todos los Profesionales
              </Button>
            </Link>
          </div>
        </div>
      </section>
      )}