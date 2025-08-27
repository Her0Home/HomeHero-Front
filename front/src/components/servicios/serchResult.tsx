"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { routes } from "@/routes"
import { generateUrl } from "@/utils/gerateURL"


interface Professional {
  id: string
  name: string
  profession: string
  category: string
  rating: number
  totalReviews: number
  image: string
  hourlyRate: number
  location: string
  totalAppointments: number
  description: string
  services: string[]
  availability: string[]
  phone: string
  email: string
  verified: boolean
  emergencyService: boolean
}

interface SearchResultsProps {
  searchParams: {
    query?: string
    category?: string
    location?: string
    minRating?: string
    maxPrice?: string
    availability?: string
  }
}

// Base de datos expandida de profesionales
const allProfessionals: Professional[] = [
  {
    id: "1",
    name: "Carlos Mendoza",
    profession: "Electricista Matriculado",
    category: "electricista",
    rating: 4.9,
    totalReviews: 127,
    image: "https://ik.imagekit.io/ankxi835d/Home%20Hero/electricistaProfile.jpg?updatedAt=1754778578455",
    hourlyRate: 45,
    location: "belgrano",
    totalAppointments: 8,
    description:
      "Electricista certificado con más de 8 años de experiencia en instalaciones residenciales y comerciales.",
    services: [
      "Instalaciones eléctricas",
      "Reparación de cortocircuitos",
      "Instalación de luminarias",
      "Automatización del hogar",
    ],
    availability: ["today", "weekend", "emergency"],
    phone: "+52 55 1234-5678",
    email: "carlos.mendoza@homehero.com",
    verified: true,
    emergencyService: true,
  },
  {
    id: "2",
    name: "María González",
    profession: "Cuidadora de Mascotas",
    category: "mascotas",
    rating: 5.0,
    totalReviews: 89,
    image: "https://ik.imagekit.io/ankxi835d/Home%20Hero/paseador-perros.jpg?updatedAt=1754756810322",
    hourlyRate: 25,
    location: "belgrano",
    totalAppointments: 5,
    description: "Cuidadora profesional de mascotas con certificación en primeros auxilios veterinarios.",
    services: ["Paseo de perros", "Cuidado en casa", "Alimentación de mascotas", "Administración de medicamentos"],
    availability: ["today", "weekend"],
    phone: "+52 55 9876-5432",
    email: "maria.gonzalez@homehero.com",
    verified: true,
    emergencyService: false,
  },
  {
    id: "3",
    name: "Ana Rodríguez",
    profession: "Especialista en jardin",
    category: "Jardineria",
    rating: 4.8,
    totalReviews: 156,
    image: "https://ik.imagekit.io/ankxi835d/Home%20Hero/jardineria.jpg?updatedAt=1754756810383",
    hourlyRate: 30,
    location: "belgrano",
    totalAppointments: 6,
    description: "Especialista en servicios de limpieza residencial y comercial con productos ecológicos.",
    services: ["Limpieza general", "Limpieza profunda", "Organización del hogar", "Limpieza post-construcción"],
    availability: ["today"],
    phone: "+52 55 5555-1234",
    email: "ana.rodriguez@homehero.com",
    verified: true,
    emergencyService: false,
  },
  {
    id: "4",
    name: "Roberto Jiménez",
    profession: "Plomero Certificado",
    category: "plomero",
    rating: 4.7,
    totalReviews: 98,
    image: "https://ik.imagekit.io/ankxi835d/Home%20Hero/plomeroPerfil.jpg?updatedAt=1754778343505",
    hourlyRate: 40,
    location: "caballito",
    totalAppointments: 10,
    description:
      "Plomero con amplia experiencia en reparaciones, instalaciones y mantenimiento de sistemas hidráulicos.",
    services: ["Reparación de tuberías", "Instalación de sanitarios", "Destapado de drenajes", "Calentadores de agua"],
    availability: ["weekend", "emergency"],
    phone: "+52 33 1234-5678",
    email: "roberto.jimenez@homehero.com",
    verified: true,
    emergencyService: true,
  },
  {
    id: "5",
    name: "Laura Martín",
    profession: "Limpieza Profesional",
    category: "Limpieza",
    rating: 4.9,
    totalReviews: 73,
    image: "https://ik.imagekit.io/ankxi835d/Home%20Hero/aseoProfile.jpg?updatedAt=1754778577652",
    hourlyRate: 35,
    location: "recoleta",
    totalAppointments: 7,
    description: "Carpintera especializada en muebles a medida, reparaciones y proyectos de carpintería fina.",
    services: ["Muebles a medida", "Reparación de muebles", "Instalación de puertas", "Trabajos de ebanistería"],
    availability: ["today", "weekend"],
    phone: "+52 81 9876-5432",
    email: "laura.martin@homehero.com",
    verified: true,
    emergencyService: false,
  },
  {
    id: "6",
    name: "Diego Herrera",
    profession: "Pintor Profesional",
    category: "pintor",
    rating: 4.6,
    totalReviews: 112,
    image: "https://ik.imagekit.io/ankxi835d/Home%20Hero/pintura.jpg?updatedAt=1754756810337",
    hourlyRate: 28,
    location: "villa-urquiza",
    totalAppointments: 9,
    description: "Pintor profesional especializado en interiores, exteriores y técnicas decorativas.",
    services: ["Pintura de interiores", "Pintura de exteriores", "Técnicas decorativas", "Preparación de superficies"],
    availability: ["today", "weekend"],
    phone: "+52 22 5555-9876",
    email: "diego.herrera@homehero.com",
    verified: true,
    emergencyService: false,
  },
]

export function SearchResults({ searchParams }: SearchResultsProps) {
  // Función de búsqueda y filtrado
  const filterProfessionals = () => {
    let filtered = [...allProfessionals]

    // Filtro por texto de búsqueda
    if (searchParams.query) {
      const query = searchParams.query.toLowerCase()
      filtered = filtered.filter(
        (prof) =>
          prof.name.toLowerCase().includes(query) ||
          prof.profession.toLowerCase().includes(query) ||
          prof.description.toLowerCase().includes(query) ||
          prof.services.some((service) => service.toLowerCase().includes(query)) ||
          prof.category.toLowerCase().includes(query),
      )
    }

    // Filtro por categoría
    if (searchParams.category && searchParams.category !== "all") {
      filtered = filtered.filter((prof) => prof.category === searchParams.category)
    }

    // Filtro por ubicación
    if (searchParams.location && searchParams.location !== "all") {
      filtered = filtered.filter((prof) => prof.location === searchParams.location)
    }

    // Filtro por calificación mínima
    if (searchParams.minRating && searchParams.minRating !== "all") {
      const minRating = Number.parseFloat(searchParams.minRating)
      filtered = filtered.filter((prof) => prof.rating >= minRating)
    }

    // Filtro por precio máximo
    if (searchParams.maxPrice && searchParams.maxPrice !== "all") {
      const maxPrice = Number.parseInt(searchParams.maxPrice)
      filtered = filtered.filter((prof) => prof.hourlyRate <= maxPrice)
    }

 

    return filtered
  }

  const filteredProfessionals = filterProfessionals()

  const getLocationName = (location: string) => {
    const locations: { [key: string]: string } = {
      cdmx: "Ciudad de México",
      guadalajara: "Guadalajara",
      monterrey: "Monterrey",
      puebla: "Puebla",
      tijuana: "Tijuana",
    }
    return locations[location] || location
  }

  return (
    <div className="space-y-6">
      {/* Información de resultados */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-hero-blue font-Title">
            {filteredProfessionals.length} Profesionales Encontrados
          </h3>
          {searchParams.query && (
            <p className="text-gray-600">
              Resultados para: <span className="font-semibold">{`"${searchParams.query}"`}</span>

            </p>
          )}
        </div>
      </div>

      {/* Lista de resultados */}
      {filteredProfessionals.length > 0 ? (
        <div className="grid gap-6">
          {filteredProfessionals.map((professional) => (
              <Card key={professional.id} className="transition-shadow hover:shadow-lg">
  <CardContent className="p-6">
    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
      
      {/* Imagen */}
      <div className="flex-shrink-0 mx-auto md:mx-0">
        <Image
          src={professional.image || "/placeholder.svg"}
          alt={`Foto de perfil de ${professional.name}`}
          width={150}
          height={120}
          className="object-cover h-auto max-w-full rounded-lg"
        />
      </div>

      {/* Info principal + derecha */}
      <div className="flex-1 w-full md:flex md:justify-between md:gap-6">
        
        {/* Info izquierda */}
        <div className="flex-1 space-y-3">
          <h4 className="text-xl text-gray-900 font-Title">{professional.name}</h4>
          <p className="text-gray-600">{professional.profession}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{getLocationName(professional.location)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Award className="w-4 h-4" />
              <span>Trabajos terminados: {professional.totalAppointments} con Excelente Calificación</span>
            </div>
          </div>
          <p className="text-gray-700 line-clamp-4 sm:line-clamp-none">{professional.description}</p>
          <div className="flex flex-wrap gap-2">
            {professional.services.slice(0, 4).map((service, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {service}
              </Badge>
            ))}
            {professional.services.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{professional.services.length - 4} más
              </Badge>
            )}
          </div>
        </div>

        {/* Bloque derecho: rating + botones */}
        <div className="flex flex-col items-end justify-start gap-4 mt-6 md:mt-0 md:w-[260px]">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(professional.rating) ? "text-yellow-500 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="font-bold">{professional.rating}</span>
          </div>

          {/* Boton */}
          <div className="flex flex-col w-full gap-3">
            <Link href={generateUrl(professional.id, routes.pro_detail, professional.name)}>
              <Button
                variant="outline"
                className="w-full text-blue-600 bg-transparent border-blue-500 hover:bg-blue-50"
              >
                Ver Perfil Completo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </CardContent>
</Card>
          ))}
        </div>
      ) : (
        <div className="py-12 text-center">
          <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full">
            <MapPin className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="mb-2 text-xl font-bold text-gray-900 font-zen-dots">No se encontraron profesionales</h3>
          <p className="mb-4 text-gray-600">Intenta ajustar tus filtros de búsqueda o busca con términos diferentes.</p>
          <Link href="/servicios">
            <Button variant="outline">Limpiar búsqueda</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
