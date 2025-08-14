import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, MapPin, Clock, Calendar, Wrench } from "lucide-react"
import Image from "next/image"



import { BookingModal } from "@/components/bookingModal"
import { ProfessionalReviews } from "@/components/ui/profesionalReview"

// Datos de ejemplo de profesionales
const professionals = [ 
  {
    id: "1",
    name: "Carlos Mendoza",
    profession: "Electricista Matriculado",
    rating: 4.9,
    totalReviews: 127,
    image: "https://ik.imagekit.io/ankxi835d/Home%20Hero/electricistaProfile.jpg?updatedAt=1754778578455",
    hourlyRate: 45,
    location: "Ciudad de México",
    experience: "8 años",
    matricula: "ELE-2016-001234",
    phone: "+52 55 1234-5678",
    email: "carlos.mendoza@homehero.com",
    description:
      "Electricista certificado con más de 8 años de experiencia en instalaciones residenciales y comerciales. Especializado en sistemas eléctricos modernos, automatización del hogar y reparaciones de emergencia.",
    services: [
      "Instalaciones eléctricas",
      "Reparación de cortocircuitos",
      "Instalación de luminarias",
      "Automatización del hogar",
      "Mantenimiento preventivo",
      "Emergencias 24/7",
    ],
    certifications: ["Electricista Matriculado Nacional", "Certificación en Domótica", "Curso de Seguridad Eléctrica"],
    availability: {
      monday: "8:00 - 18:00",
      tuesday: "8:00 - 18:00",
      wednesday: "8:00 - 18:00",
      thursday: "8:00 - 18:00",
      friday: "8:00 - 18:00",
      saturday: "9:00 - 15:00",
      sunday: "No disponible",
    },
  },
   {
    id: "2",
    name: "María González",
    profession: "Cuidadora de Mascotas",
    rating: 5.0,
    totalReviews: 89,
    image: "/placeholder.svg?height=400&width=400",
    hourlyRate: 25,
    location: "Ciudad de México",
    experience: "5 años",
    matricula: "PET-2019-005678",
    phone: "+52 55 9876-5432",
    email: "maria.gonzalez@homehero.com",
    description:
      "Cuidadora profesional de mascotas con certificación en primeros auxilios veterinarios. Amante de los animales con experiencia en el cuidado de perros, gatos y otras mascotas domésticas.",
    services: [
      "Paseo de perros",
      "Cuidado en casa",
      "Alimentación de mascotas",
      "Administración de medicamentos",
      "Cuidado nocturno",
      "Servicios de emergencia",
    ],
    certifications: [
      "Certificación en Cuidado Animal",
      "Primeros Auxilios Veterinarios",
      "Curso de Comportamiento Canino",
    ],
    availability: {
      monday: "7:00 - 19:00",
      tuesday: "7:00 - 19:00",
      wednesday: "7:00 - 19:00",
      thursday: "7:00 - 19:00",
      friday: "7:00 - 19:00",
      saturday: "8:00 - 16:00",
      sunday: "8:00 - 16:00",
    },
  },
  {
    id: "3",
    name: "Ana Rodríguez",
    profession: "Especialista en Limpieza",
    rating: 4.8,
    totalReviews: 156,
    image: "/placeholder.svg?height=400&width=400",
    hourlyRate: 30,
    location: "Ciudad de México",
    experience: "6 años",
    matricula: "LIM-2018-009876",
    phone: "+52 55 5555-1234",
    email: "ana.rodriguez@homehero.com",
    description:
      "Especialista en servicios de limpieza residencial y comercial. Experta en limpieza profunda, organización del hogar y uso de productos ecológicos para un ambiente saludable.",
    services: [
      "Limpieza general",
      "Limpieza profunda",
      "Organización del hogar",
      "Limpieza post-construcción",
      "Limpieza de oficinas",
      "Productos ecológicos",
    ],
    certifications: [
      "Certificación en Limpieza Profesional",
      "Manejo de Productos Químicos",
      "Técnicas de Organización",
    ],
    availability: {
      monday: "8:00 - 17:00",
      tuesday: "8:00 - 17:00",
      wednesday: "8:00 - 17:00",
      thursday: "8:00 - 17:00",
      friday: "8:00 - 17:00",
      saturday: "9:00 - 14:00",
      sunday: "No disponible",
    },
  },
]





export default function ProfessionalProfilePage({ 
  params 
}:  {
  params: { slug: string[] };
}) {
    const { slug} = params;
    const id = slug[0];

  const professional = professionals?.find((pro)=> pro.id === id)

  if (!professional) {
    return (
      <div>
        <h2> No se encontro el perfil de el profesional </h2>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      

      <div className="container px-4 py-8 mx-auto">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Columna Principal - Información del Profesional */}
          <div className="space-y-6 lg:col-span-2">
            {/* Perfil Principal */}
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="flex-shrink-0">
                    <Image
                      src={professional.image || "/placeholder.svg"}
                      alt={professional.name}
                      width={200}
                      height={200}
                      className="object-cover rounded-2xl"
                    />
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <h1 className="mb-2 text-3xl font-bold text-gray-900 font-Title">{professional.name}</h1>
                      <p className="mb-2 text-xl text-gray-600 font-Text">{professional.profession}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 font-Text">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{professional.location}</span>
                        </div>
                        {/* <div className="flex items-center space-x-1">
                          <Award className="w-4 h-4" />
                          <span>{professional.experience} de experiencia</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Shield className="w-4 h-4" />
                          <span>Matrícula: {professional.matricula}</span>
                        </div> */}
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
                                i < Math.floor(professional.rating) ? "text-yellow-500 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-2xl font-bold text-gray-900">{professional.rating}</span>
                      </div>
                      <span className="text-gray-600">({professional.totalReviews} reseñas)</span>
                    </div>

                    {/* Precio */}
                    {/* <div className="p-4 rounded-lg bg-orange-50">
                      <p className="text-2xl font-bold text-orange-600">${professional.hourlyRate}/hora</p>
                      <p className="text-sm text-gray-600">Precio base por hora de servicio</p>
                    </div> */}

                    {/* Descripción */}
                    <p className="leading-relaxed text-gray-700 font-Text">{professional.description}</p>

                    {/* Contacto */}
                    {/* <div className="flex flex-col gap-3 sm:flex-row">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>{professional.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        <span>{professional.email}</span>
                      </div>
                    </div> */}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Servicios */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl font-Title">
                  <Wrench className="w-5 h-5 text-orange-500" />
                  <span>Servicios Ofrecidos</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3 md:grid-cols-2">
                  {professional.services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full font-Text"></div>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certificaciones */}
            {/* <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-xl font-zen-dots">
                  <Award className="w-5 h-5 text-blue-500" />
                  <span>Certificaciones</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {professional.certifications.map((cert, index) => (
                    <Badge key={index} variant="secondary" className="mb-2 mr-2">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card> */}

            {/* Reseñas */}
            <ProfessionalReviews professionalId={professional.id} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Botón de Reserva */}
            <Card>
              <CardContent className="p-6">
                <BookingModal professional={professional}>
                  <Button className="w-full py-3 text-lg text-white bg-orange-500 font-Text hover:bg-orange-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    Reservar Cita
                  </Button>
                </BookingModal>
                <p className="mt-2 text-sm text-center text-gray-600 font-Text">Seguir instrucciones para reservar</p>
              </CardContent>
            </Card>

            {/* Disponibilidad */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg font-Title">
                  <Clock className="w-5 h-5 text-hero-blue" />
                  <span>Disponibilidad</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(professional.availability).map(([day, hours]) => (
                  <div key={day} className="flex items-center justify-between">
                    <span className="font-medium capitalize font-Title">
                      {day === "monday" && "Lunes"}
                      {day === "tuesday" && "Martes"}
                      {day === "wednesday" && "Miércoles"}
                      {day === "thursday" && "Jueves"}
                      {day === "friday" && "Viernes"}
                      {day === "saturday" && "Sábado"}
                      {day === "sunday" && "Domingo"}
                    </span>
                    <span className={`font-Text text-sm ${hours === "No disponible" ? "text-red-500" : "text-green-600"}`}>
                      {hours}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Estadísticas Rápidas */}
            {/* <Card>
              <CardHeader>
                <CardTitle className="text-lg font-zen-dots">Estadísticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Trabajos Completados</span>
                  <span className="font-bold text-green-600">+{professional.totalReviews}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Tiempo de Respuesta</span>
                  <span className="font-bold text-blue-600">{"< 2 horas"}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Tasa de Satisfacción</span>
                  <span className="font-bold text-orange-600">{Math.round(professional.rating * 20)}%</span>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  )
}