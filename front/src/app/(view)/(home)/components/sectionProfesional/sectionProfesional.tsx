"use client"

import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { routes } from "@/routes"
import { getProDest } from "@/services/profesionals"
import { IProfessionalRating } from "@/types/professional"

export const SectionProfesional = () => {
  const [professionals, setProfessionals] = useState<IProfessionalRating[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProDest().then((data) => {
      if (data) setProfessionals(data)
      setLoading(false)
    })
  }, [])

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

        {loading ? (
          <p className="text-center text-gray-500">Cargando profesionales...</p>
        ) : (
          <div className="grid gap-8 md:grid-cols-3">
            {professionals.slice(0, 3).map((professional) => (
              <Card key={professional.id} className="transition-shadow hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <Image
                      src={professional.imageProfile}
                      alt={professional.name}
                      fill
                      className="object-cover"
                    />
                    {professional.isVerified && (
                      <div className="absolute flex items-center justify-center w-6 h-6 bg-green-500 rounded-full -top-1 -right-1">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                  <h3 className="mb-1 text-lg font-bold font-Title">{professional.name}</h3>
                  <div className="flex flex-wrap justify-center gap-2 my-2">
  

    <span className="font-semibold text-gray-900">{professional.categories.name}</span>
   


</div>

                  <span className="text-gray-500">({professional.description})</span>
                  <div className="flex items-center justify-center mb-2 space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-semibold">{professional.avaregeRating}</span>
                  </div>
                  <p className="mb-4 text-sm text-gray-600">
                   Citas terminadas: {professional.totalAppointments} con Excelente Calificación
                  </p>
                  {professional.id && professional.name && (
  <Link href={`${routes.pro_detail}/${professional.id}/${professional.name}`}>
    <Button className="w-full text-white bg-orange-500 hover:bg-orange-600">
      Ver Perfil
    </Button>
  </Link>
)}

                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link href="/servicios">
            <Button size="lg" variant="outline" className="bg-transparent">
              Ver Todos los Profesionales
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}