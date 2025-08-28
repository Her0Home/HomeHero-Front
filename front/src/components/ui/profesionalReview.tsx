// "use client"

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
// import { Star, ThumbsUp, ThumbsDown } from "lucide-react"
// import { format } from "date-fns"
// import { es } from "date-fns/locale"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Button } from "@/components/ui/button"
// import { Filter, X } from "lucide-react"
// import { useState } from "react"

// interface Review {
//   id: string
//   clientName: string
//   clientAvatar?: string
//   rating: number
//   comment: string
//   service: string
//   date: Date
//   isPositive: boolean
//   verified: boolean
// }

// interface ProfessionalReviewsProps {
//   professionalId: string
// }

// // Datos de ejemplo de reseñas con más variedad
// const reviewsData: { [key: string]: Review[] } = {
//   "1": [
//     {
//       id: "1",
//       clientName: "Roberto Silva",
//       clientAvatar: "/placeholder.svg?height=40&width=40",
//       rating: 4.5,
//       comment:
//         "Excelente trabajo! Carlos llegó puntual, fue muy profesional y resolvió el problema eléctrico de mi cocina rápidamente. Muy recomendado, definitivamente lo volvería a contratar.",
//       service: "Reparación eléctrica",
//       date: new Date(2024, 11, 10),
//       isPositive: true,
//       verified: true,
//     },
//     {
//       id: "2",
//       clientName: "Laura Martínez",
//       clientAvatar: "/placeholder.svg?height=40&width=40",
//       rating: 5,
//       comment:
//         "Increíble servicio. Instaló todas las luminarias de mi casa nueva y quedaron perfectas. Muy limpio en su trabajo y explicó todo el proceso. 100% recomendado.",
//       service: "Instalación de luminarias",
//       date: new Date(2024, 11, 8),
//       isPositive: true,
//       verified: true,
//     },
//     {
//       id: "3",
//       clientName: "Miguel Torres",
//       clientAvatar: "/placeholder.svg?height=40&width=40",
//       rating: 4,
//       comment:
//         "Buen trabajo en general, aunque llegó 15 minutos tarde. La reparación del cortocircuito fue exitosa y el precio fue justo. Lo recomendaría pero esperaría mejor puntualidad.",
//       service: "Reparación de cortocircuito",
//       date: new Date(2024, 11, 5),
//       isPositive: false,
//       verified: true,
//     },
//     {
//       id: "4",
//       clientName: "Carmen López",
//       clientAvatar: "/placeholder.svg?height=40&width=40",
//       rating: 5,
//       comment:
//         "Fantástico! Instaló un sistema de automatización en mi hogar y ahora puedo controlar todas las luces desde mi teléfono. Muy profesional y conocedor de la tecnología moderna.",
//       service: "Automatización del hogar",
//       date: new Date(2024, 11, 2),
//       isPositive: true,
//       verified: true,
//     },
//     {
//       id: "5",
//       clientName: "José Ramírez",
//       clientAvatar: "/placeholder.svg?height=40&width=40",
//       rating: 5,
//       comment:
//         "Servicio de emergencia excelente. Tuve un problema eléctrico a las 10 PM y Carlos vino inmediatamente. Resolvió todo en menos de una hora. Muy agradecido por su disponibilidad.",
//       service: "Emergencias 24/7",
//       date: new Date(2024, 10, 28),
//       isPositive: true,
//       verified: true,
//     },
//     {
//       id: "6",
//       clientName: "Diana Flores",
//       clientAvatar: "/placeholder.svg?height=40&width=40",
//       rating: 3,
//       comment:
//         "El trabajo estuvo bien pero tardó más de lo esperado. Tuvo que volver al día siguiente para terminar la instalación. Al final quedó bien pero la comunicación podría mejorar.",
//       service: "Instalación de luminarias",
//       date: new Date(2024, 10, 25),
//       isPositive: false,
//       verified: true,
//     },
//     {
//       id: "7",
//       clientName: "Pedro Castillo",
//       clientAvatar: "/placeholder.svg?height=40&width=40",
//       rating: 5,
//       comment:
//         "Excelente mantenimiento preventivo. Carlos revisó toda la instalación eléctrica de mi casa y me dio recomendaciones muy útiles. Muy profesional y honesto.",
//       service: "Mantenimiento preventivo",
//       date: new Date(2024, 10, 20),
//       isPositive: true,
//       verified: true,
//     },
//     {
//       id: "8",
//       clientName: "Lucía Herrera",
//       clientAvatar: "/placeholder.svg?height=40&width=40",
//       rating: 4,
//       comment:
//         "Buen servicio de reparación. Solucionó el problema pero el precio fue un poco alto comparado con otros presupuestos. Sin embargo, el trabajo fue de calidad.",
//       service: "Reparación eléctrica",
//       date: new Date(2024, 10, 15),
//       isPositive: false,
//       verified: true,
//     },
//   ],
//   "2": [
//     {
//       id: "6",
//       clientName: "Patricia Hernández",
//       clientAvatar: "/placeholder.svg?height=40&width=40",
//       rating: 5,
//       comment:
//         "María es increíble con mi perro Max. Siempre regresa feliz y cansado después de sus paseos. Es muy cariñosa y responsable. La recomiendo al 100%.",
//       service: "Paseo de perros",
//       date: new Date(2024, 11, 12),
//       isPositive: true,
//       verified: true,
//     },
//     {
//       id: "7",
//       clientName: "Fernando García",
//       clientAvatar: "/placeholder.svg?height=40&width=40",
//       rating: 5,
//       comment:
//         "Excelente cuidado de mis gatos durante mis vacaciones. María les dio mucho amor y atención. Recibí fotos y actualizaciones diarias. Muy profesional y confiable.",
//       service: "Cuidado en casa",
//       date: new Date(2024, 11, 9),
//       isPositive: true,
//       verified: true,
//     },
//     {
//       id: "8",
//       clientName: "Ana Morales",
//       clientAvatar: "/placeholder.svg?height=40&width=40",
//       rating: 5,
//       comment:
//         "María cuidó a mi perrita enferma y le administró sus medicamentos perfectamente. Muy atenta a los detalles y con mucha paciencia. Una verdadera profesional.",
//       service: "Administración de medicamentos",
//       date: new Date(2024, 11, 6),
//       isPositive: true,
//       verified: true,
//     },
//     {
//       id: "9",
//       clientName: "Carlos Mendez",
//       clientAvatar: "/placeholder.svg?height=40&width=40",
//       rating: 5,
//       comment:
//         "Servicio nocturno excelente. María se quedó toda la noche cuidando a mi cachorro que estaba enfermo. Muy dedicada y profesional. La recomiendo completamente.",
//       service: "Cuidado nocturno",
//       date: new Date(2024, 11, 3),
//       isPositive: true,
//       verified: true,
//     },
//     {
//       id: "10",
//       clientName: "Sofía Ruiz",
//       clientAvatar: "/placeholder.svg?height=40&width=40",
//       rating: 5,
//       comment:
//         "María es fantástica. Mi perro la adora y siempre está emocionado cuando la ve llegar. Muy puntual, responsable y realmente ama a los animales. 5 estrellas merecidas.",
//       service: "Paseo de perros",
//       date: new Date(2024, 10, 30),
//       isPositive: true,
//       verified: true,
//     },
//   ],
//   "3": [
//     {
//       id: "11",
//       clientName: "Ricardo Vega",
//       clientAvatar: "/placeholder.svg?height=40&width=40",
//       rating: 5,
//       comment:
//         "Ana dejó mi casa impecable. Muy detallista y profesional. Usó productos ecológicos como le pedí y el resultado fue excelente. Definitivamente la contrataré de nuevo.",
//       service: "Limpieza general",
//       date: new Date(2024, 11, 11),
//       isPositive: true,
//       verified: true,
//     },
//     {
//       id: "12",
//       clientName: "Elena Castro",
//       clientAvatar: "/placeholder.svg?height=40&width=40",
//       rating: 4,
//       comment:
//         "Buen trabajo de limpieza profunda, aunque se tardó más de lo esperado. El resultado final fue muy bueno y mi casa quedó como nueva. Precio justo por el servicio.",
//       service: "Limpieza profunda",
//       date: new Date(2024, 11, 7),
//       isPositive: false,
//       verified: true,
//     },
//     {
//       id: "13",
//       clientName: "Andrés Jiménez",
//       clientAvatar: "/placeholder.svg?height=40&width=40",
//       rating: 5,
//       comment:
//         "Increíble trabajo de organización. Ana transformó mi oficina en casa completamente. Ahora todo tiene su lugar y es mucho más funcional. Muy recomendada.",
//       service: "Organización del hogar",
//       date: new Date(2024, 11, 4),
//       isPositive: true,
//       verified: true,
//     },
//     {
//       id: "14",
//       clientName: "Mónica Delgado",
//       clientAvatar: "/placeholder.svg?height=40&width=40",
//       rating: 5,
//       comment:
//         "Excelente limpieza post-construcción. Ana limpió toda la casa después de la remodelación y quedó perfecta. Muy trabajadora y atenta a los detalles.",
//       service: "Limpieza post-construcción",
//       date: new Date(2024, 11, 1),
//       isPositive: true,
//       verified: true,
//     },
//     {
//       id: "15",
//       clientName: "Gabriel Santos",
//       clientAvatar: "/placeholder.svg?height=40&width=40",
//       rating: 5,
//       comment:
//         "Ana limpia mi oficina semanalmente y siempre hace un trabajo excepcional. Muy confiable, puntual y profesional. Mis empleados siempre comentan lo limpio que está todo.",
//       service: "Limpieza de oficinas",
//       date: new Date(2024, 10, 29),
//       isPositive: true,
//       verified: true,
//     },
//   ],
// }

// export function ProfessionalReviews({ professionalId }: ProfessionalReviewsProps) {
//   const [filters, setFilters] = useState({
//     rating: "all",
//     date: "newest",
//     service: "all",
//     sentiment: "all",
//   })
//   const [showFilters, setShowFilters] = useState(false)

//   const reviews = reviewsData[professionalId] || []
//   const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
//   const positiveReviews = reviews.filter((review) => review.isPositive).length
//   const negativeReviews = reviews.length - positiveReviews

//   // Función para filtrar reseñas
//   const filteredReviews = reviews.filter((review) => {
//     // Filtro por calificación
//     if (filters.rating !== "all") {
//       const ratingFilter = Number.parseInt(filters.rating)
//       if (review.rating !== ratingFilter) return false
//     }

//     // Filtro por tipo de servicio
//     if (filters.service !== "all") {
//       if (review.service !== filters.service) return false
//     }

//     // Filtro por sentimiento
//     if (filters.sentiment !== "all") {
//       if (filters.sentiment === "positive" && !review.isPositive) return false
//       if (filters.sentiment === "negative" && review.isPositive) return false
//     }

//     return true
//   })

//   // Ordenar por fecha
//   const sortedReviews = [...filteredReviews].sort((a, b) => {
//     if (filters.date === "newest") {
//       return b.date.getTime() - a.date.getTime()
//     } else {
//       return a.date.getTime() - b.date.getTime()
//     }
//   })

//   // Obtener servicios únicos para el filtro
//   const uniqueServices = [...new Set(reviews.map((review) => review.service))]

//   // Función para limpiar filtros
//   const clearFilters = () => {
//     setFilters({
//       rating: "all",
//       date: "newest",
//       service: "all",
//       sentiment: "all",
//     })
//   }

//   // Contar filtros activos
//   const activeFiltersCount = Object.values(filters).filter((value) => value !== "all" && value !== "newest").length

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle className="text-xl font-Title">Reseñas y Calificaciones</CardTitle>

//         {/* Resumen de calificaciones */}
//         <div className="p-4 rounded-lg bg-gray-50">
//           <div className="grid gap-4 md:grid-cols-3">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-gray-900">{totalRating.toFixed(1)}</div>
//               <div className="flex items-center justify-center mb-1">
//                 {[...Array(5)].map((_, i) => (
//                   <Star
//                     key={i}
//                     className={`w-4 h-4 ${
//                       i < Math.floor(totalRating) ? "text-yellow-500 fill-current" : "text-gray-300"
//                     }`}
//                   />
//                 ))}
//               </div>
//               <div className="text-sm text-gray-600 font-Text">Calificación promedio</div>
//             </div>

//             <div className="text-center">
//               <div className="flex items-center justify-center space-x-2">
//                 <ThumbsUp className="w-5 h-5 text-green-500" />
//                 <span className="text-2xl font-bold text-green-600">{positiveReviews}</span>
//               </div>
//               <div className="text-sm text-gray-600 font-Text">Comentarios positivos</div>
//             </div>

//             <div className="text-center">
//               <div className="flex items-center justify-center space-x-2">
//                 <ThumbsDown className="w-5 h-5 text-orange-500" />
//                 <span className="text-2xl font-bold text-orange-600">{negativeReviews}</span>
//               </div>
//               <div className="text-sm text-gray-600 font-Text">Comentarios con observaciones</div>
//             </div>
//           </div>
//         </div>
//       </CardHeader>

//       <CardContent className="space-y-6">
//         {/* Controles de Filtro */}
//         <div className="flex items-center justify-between">
//           <h4 className="text-lg font-bold logo font-Title">
//             {sortedReviews.length === reviews.length
//               ? "Últimos 5 Trabajos"
//               : `${sortedReviews.length} Reseñas Filtradas`}
//           </h4>
//           <div className="flex items-center space-x-2 font-Text">
//             <Button
//               variant="outline"
//               size="sm"
//               onClick={() => setShowFilters(!showFilters)}
//               className="flex items-center space-x-2"
//             >
//               <Filter className="w-4 h-4 font-Text" />
//               <span>Filtros</span>
//               {activeFiltersCount > 0 && (
//                 <span className="flex items-center justify-center w-5 h-5 text-xs text-white bg-orange-500 rounded-full font-Text">
//                   {activeFiltersCount}
//                 </span>
//               )}
//             </Button>
//             {activeFiltersCount > 0 && (
//               <Button variant="ghost" size="sm" onClick={clearFilters} className="text-gray-500">
//                 <X className="w-4 h-4" />
//                 Limpiar
//               </Button>
//             )}
//           </div>
//         </div>

//         {/* Panel de Filtros */}
//         {showFilters && (
//           <div className="p-4 space-y-4 rounded-lg bg-gray-50">
//             <div className="grid gap-4 md:grid-cols-4">
//               {/* Filtro por Calificación */}
//               <div>
//                 <label className="block mb-2 text-sm font-medium font-Text">Calificación</label>
//                 <Select value={filters.rating} onValueChange={(value) => setFilters({ ...filters, rating: value })}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Todas" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">Todas las calificaciones</SelectItem>
//                     <SelectItem value="5">5 estrellas</SelectItem>
//                     <SelectItem value="4">4 estrellas</SelectItem>
//                     <SelectItem value="3">3 estrellas</SelectItem>
//                     <SelectItem value="2">2 estrellas</SelectItem>
//                     <SelectItem value="1">1 estrella</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Filtro por Fecha */}
//               <div>
//                 <label className="block mb-2 text-sm font-medium font-Text">Ordenar por fecha</label>
//                 <Select value={filters.date} onValueChange={(value) => setFilters({ ...filters, date: value })}>
//                   <SelectTrigger>
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="newest">Más recientes</SelectItem>
//                     <SelectItem value="oldest">Más antiguas</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Filtro por Servicio */}
//               <div>
//                 <label className="block mb-2 text-sm font-medium font-Text">Tipo de servicio</label>
//                 <Select value={filters.service} onValueChange={(value) => setFilters({ ...filters, service: value })}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Todos" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">Todos los servicios</SelectItem>
//                     {uniqueServices.map((service) => (
//                       <SelectItem key={service} value={service}>
//                         {service}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               {/* Filtro por Sentimiento */}
//               <div>
//                 <label className="block mb-2 text-sm font-medium font-Text">Tipo de comentario</label>
//                 <Select
//                   value={filters.sentiment}
//                   onValueChange={(value) => setFilters({ ...filters, sentiment: value })}
//                 >
//                   <SelectTrigger>
//                     <SelectValue placeholder="Todos" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">Todos los comentarios</SelectItem>
//                     <SelectItem value="positive">Solo positivos</SelectItem>
//                     <SelectItem value="negative">Con observaciones</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Lista de Reseñas Filtradas */}
//         {sortedReviews.length > 0 ? (
//           sortedReviews.map((review) => (
//             <div key={review.id} className="pb-6 border-b border-gray-100 last:border-b-0">
//               <div className="flex items-start space-x-4">
//                 <Avatar className="w-12 h-12">
//                   <AvatarImage src={review.clientAvatar || "/placeholder.svg"} alt={review.clientName} />
//                   <AvatarFallback>
//                     {review.clientName
//                       .split(" ")
//                       .map((n) => n[0])
//                       .join("")}
//                   </AvatarFallback>
//                 </Avatar>

//                 <div className="flex-1 space-y-2">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                       <h5 className="font-Title">{review.clientName}</h5>
//                       {review.verified && (
//                         <Badge variant="secondary" className="text-xs">
//                           Verificado
//                         </Badge>
//                       )}
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <div className="flex items-center">
//                         {[...Array(5)].map((_, i) => (
//                           <Star
//                             key={i}
//                             className={`w-4 h-4 ${i < review.rating ? "text-yellow-500 fill-current" : "text-gray-300"}`}
//                           />
//                         ))}
//                       </div>
//                       <span className="text-sm text-gray-500 font-Text">{format(review.date, "dd/MM/yyyy", { locale: es })}</span>
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-2">
//                     <Badge variant="outline" className="text-xs">
//                       {review.service}
//                     </Badge>
//                     {review.isPositive ? (
//                       <div className="flex items-center space-x-1 text-green-600">
//                         <ThumbsUp className="w-3 h-3" />
//                         <span className="text-xs">Positivo</span>
//                       </div>
//                     ) : (
//                       <div className="flex items-center space-x-1 text-orange-600">
//                         <ThumbsDown className="w-3 h-3" />
//                         <span className="text-xs">Con observaciones</span>
//                       </div>
//                     )}
//                   </div>

//                   <p className="text-sm leading-relaxed text-gray-700 font-Text">{review.comment}</p>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="py-8 text-center text-gray-500 font-Text">
//             <Filter className="w-12 h-12 mx-auto mb-4 text-gray-300" />
//             <p>No se encontraron reseñas con los filtros seleccionados.</p>
//             <Button variant="outline" onClick={clearFilters} className="mt-2 bg-transparent">
//               Limpiar filtros
//             </Button>
//           </div>
//         )}

//         {reviews.length === 0 && (
//           <div className="py-8 text-center text-gray-500 font-Text">
//             <p>Este profesional aún no tiene reseñas.</p>
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   )
// }
'use client'
import { useEffect, useState } from "react"

import {
  Card, CardHeader, CardTitle, CardContent,
} from "@/components/ui/card"
import { Star, ThumbsUp, ThumbsDown } from "lucide-react"
import { getLatestCommentsByProfessional } from "@/services/profesionals"
import { Avatar, AvatarImage } from "./avatar"

interface Review {
  id: string
  clientName: string
  clientAvatar?: string
  rating: number
  content: string
  service: string
  date: Date
  isPositive: boolean
  verified: boolean
}

interface ProfessionalReviewsProps {
  professionalId: string
}

// 🔧 Normalización defensiva
const decodeText = (text: string): string => {
  try {
    return decodeURIComponent(escape(text))
  } catch {
    return text
  }
}

const normalizeReview = (r: any): Review => ({
  id: r.id ?? crypto.randomUUID(),
  clientName: decodeText(r.userName ?? r.clientName ?? "Cliente"),
  clientAvatar: r.userImage?.startsWith("http") ? r.userImage : r.clientAvatar ?? "/placeholder.svg",
  rating: Math.max(1, Math.min(5, r.rating ?? 0)),
  content: decodeText(r.content ?? r.comment ?? ""),
  service: decodeText(r.subcategory ?? r.service ?? "Servicio no especificado"),
  date: new Date(r.date ?? r.createdAt ?? Date.now()),
  isPositive: (r.rating ?? 0) >= 4,
  verified: r.verified ?? true,
})

export function ProfessionalReviews({ professionalId }: ProfessionalReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true)
      try {
        const data = await getLatestCommentsByProfessional(professionalId)
        const normalized = Array.isArray(data) ? data.map(normalizeReview) : []
        setReviews(normalized)
      } catch (err) {
        console.error("Error al cargar reseñas:", err)
        setReviews([])
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [professionalId])

  const totalRating = reviews.length
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
    : 0
  const positiveReviews = reviews.filter((r) => r.isPositive).length
  const negativeReviews = reviews.length - positiveReviews

  if (loading) return <div className="p-4 text-sm text-gray-500">Cargando reseñas...</div>
  if (!reviews.length) return <div className="p-4 text-sm text-gray-500">Este profesional aún no tiene reseñas.</div>

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-Title">Reseñas y Calificaciones</CardTitle>
        <div className="p-4 rounded-lg bg-gray-50">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{totalRating.toFixed(1)}</div>
              <div className="flex justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(totalRating) ? "text-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-600">Calificación promedio</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center space-x-2">
                <ThumbsUp className="w-5 h-5 text-green-500" />
                <span className="text-2xl font-bold text-green-600">{positiveReviews}</span>
              </div>
              <div className="text-sm text-gray-600">Comentarios positivos</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center space-x-2">
                <ThumbsDown className="w-5 h-5 text-orange-500" />
                <span className="text-2xl font-bold text-orange-600">{negativeReviews}</span>
              </div>
              <div className="text-sm text-gray-600">Con observaciones</div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="pb-6 border-b border-gray-100 last:border-b-0">
            <div className="flex items-start space-x-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src={review.clientAvatar || "/placeholder.svg"} />
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="font-semibold font-Title">{review.clientName}</div>
                  <div className="text-gray-500 font-Text text-md">
                    {review.date.toLocaleDateString("es-AR", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </div>
                <div className="mt-1 text-base italic text-gray-500">
                  Servicio: {review.service} {review.verified && "· Verificado"}
                </div>
                <div className="flex items-center mt-1 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.round(review.rating) ? "text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600">{review.rating.toFixed(1)}</span>
                </div>
                <div className="mt-2 text-2xl text-gray-700 font-Text">{review.content}</div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}