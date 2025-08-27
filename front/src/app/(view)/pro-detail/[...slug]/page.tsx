import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, MapPin, Clock, Calendar, Wrench } from "lucide-react"
import Image from "next/image"
import { BookingModal } from "@/components/bookingModal"
import { ProfessionalReviews } from "@/components/ui/profesionalReview"

import { IProfessionalSearch } from "@/types/professional"
import { getProfessionalById } from "@/services/profesionals"

type Props = {
  params: { slug: string[] }
}

export default async function ProfessionalProfilePage({ params }: Props) {
  const id = params.slug[0]
  const professional: IProfessionalSearch | null = await getProfessionalById(id)

  if (!professional) {
    return (
      <div className="p-8">
        <h2 className="text-xl font-semibold text-red-600">
          No se encontró el perfil del profesional
        </h2>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Columna Principal */}
          <div className="space-y-6 lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="flex-shrink-0">
                    <Image
                      src={professional.imageProfile || "/placeholder.svg"}
                      alt={professional.name}
                      width={200}
                      height={200}
                      className="object-cover rounded-2xl"
                    />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h1 className="mb-2 text-3xl font-bold text-gray-900 font-Title">
                        {professional.name}
                      </h1>
                      <p className="mb-2 text-xl text-gray-600 font-Text">
                        {/* Podés agregar profesión si está disponible */}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 font-Text">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{professional.city}</span>
                        </div>
                      </div>
                    </div>

                    {/* Calificación */}
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-6 h-6 ${
                                i < Math.floor(Number(professional.avaregeRating))
                                  ? "text-yellow-500 fill-current"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-2xl font-bold text-gray-900">
                          {professional.avaregeRating}
                        </span>
                      </div>
                      <span className="text-gray-600">
                        ({professional.totalAppointments} citas)
                      </span>
                    </div>

                    {/* Descripción */}
                    <p className="leading-relaxed text-gray-700 font-Text">
                      {professional.description}
                    </p>

                    {/* Categoría y Subcategorías */}
{professional.category?.name && (
  <div className="mt-6 space-y-4">
    <h4 className="text-lg font-semibold text-hero-orange font-Title">
      Especialidades
    </h4>

    <div className="space-y-2">
      <span className="font-medium text-gray-700 font-Text">
        {professional.category.name}
      </span>

      {professional.subcategories?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {professional.subcategories
            .filter((sub) => sub && typeof sub.name === 'string')
            .map((sub) => (
              <div
                key={sub.id}
                className="flex items-center px-3 py-1 text-sm text-gray-800 bg-gray-100 rounded-full font-Text"
              >
                {sub.image && (
                  <Image
                    src={sub.image}
                    alt={sub.name}
                    width={20}
                    height={20}
                    className="object-cover mr-2 rounded-full"
                  />
                )}
                {sub.name}
              </div>
            ))}
        </div>
      )}
    </div>
  </div>
)}

                    {/* Categorías y Subcategorías */}
                    {/* {professional.categories?.length > 0 && (
                      <div className="mt-6 space-y-4">
                        <h4 className="text-lg font-semibold text-gray-800 font-Title">
                          Especialidades
                        </h4>
                        {professional.categories.map((category) => (
                          <div key={category.id} className="space-y-2">
                            <span className="font-medium text-gray-700">
                              {category.name}
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {category.subcategories.map((sub) => (
                                <div
                                  key={sub.id}
                                  className="flex items-center px-3 py-1 text-sm text-gray-800 bg-gray-100 rounded-full font-Text"
                                >
                                  {sub.image && (
                                    <Image
                                      src={sub.image}
                                      alt={sub.name}
                                      width={20}
                                      height={20}
                                      className="object-cover mr-2 rounded-full"
                                    />
                                  )}
                                  {sub.name}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )} */}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reseñas */}
            <ProfessionalReviews professionalId={professional.id} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <BookingModal
                  professional={professional}
                  professionalId={professional.id}
                >
                  <Button className="w-full py-3 text-lg text-white bg-orange-500 font-Text hover:bg-orange-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    Reservar Cita
                  </Button>
                </BookingModal>
                <p className="mt-2 text-sm text-center text-gray-600 font-Text">
                  Seguir instrucciones para reservar
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

