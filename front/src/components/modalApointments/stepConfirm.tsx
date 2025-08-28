"use client"

import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Calendar as CalendarIcon, Clock, MapPin } from "lucide-react"

// import { zonedTimeToUtc } from "date-fns-tz"

import { createAppointment } from "@/services/appointments"
import { useAuth } from "@/context/authcontext"


interface Professional {
  name: string
  id: string

}

interface TimeSlot {
  id: string
  startTime: Date
  endTime: Date
  available: boolean
}

interface BookingDetails {
  service: string
  description: string
  address: string
}

interface ConfirmStepProps {
  professional: Professional
  selectedDate: Date
  selectedTimeSlot: TimeSlot
  bookingDetails: BookingDetails
  onChangeDetails: (details: BookingDetails) => void
  onBack: () => void
  onSubmit: () => void
}

export default function ConfirmStep({
    professional,
    selectedDate,
    selectedTimeSlot,
    bookingDetails,
    onChangeDetails,
    onBack,
    onSubmit,
}: ConfirmStepProps) {
    const { user, token } = useAuth()
    if (!token) {
  console.error("Token ausente")
  return
}

    const handleSubmit = async () => {
//   const startTimeUtc = zonedTimeToUtc(selectedTimeSlot.startTime, "America/Argentina/Buenos_Aires").toISOString()
const startTimeUtc = new Date(selectedTimeSlot.startTime).toISOString()
const  clientId = user?.id || ""

  const payload = {
    clientId,
    professionalId: professional.id,
    startTime: startTimeUtc,
    description: bookingDetails.description,
    status: "pending" as const,
    imageFile: bookingDetails.address,
  }
console.log(payload)
console.log(token)
  try {
    const res = await createAppointment(payload, token)
    console.log("Reserva creada:", res)
    onSubmit() // si querés avanzar al siguiente paso
  } catch (err) {
    console.error("Error al crear la reserva:", err)
    // Podés mostrar un toast o mensaje de error acá
  }
}
  return (
    <div className="space-y-4">
{/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-zen-dots">Confirmar reserva</h3>
        <Button variant="outline" onClick={onBack}>
          Cambiar horario
        </Button>
      </div>
      {/* Resumen */}
      <Card className="border-orange-200 bg-orange-50">
        <CardHeader>
          <CardTitle className="text-lg text-orange-800 font-zen-dots">Resumen de tu reserva</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4 text-orange-600" />
            <span>
              {professional.name} - 
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <CalendarIcon className="w-4 h-4 text-orange-600" />
            <span>{format(selectedDate, "EEEE, dd/MM/yyyy", { locale: es })}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-orange-600" />
            <span>
              {format(selectedTimeSlot.startTime, "HH:mm")} - {format(selectedTimeSlot.endTime, "HH:mm")}
              <span className="ml-2 text-sm text-gray-600">(Franja de 3 horas)</span>
            </span>
          </div>
        </CardContent>
      </Card>
      {/* Detalles del servicio */}
      <div className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium">Tipo de servicio</label>
          <select
            className="w-full bg p-2 border rounded-md"
            value={bookingDetails.service}
            onChange={(e) => onChangeDetails({ ...bookingDetails, service: e.target.value })}
          >
            <option value="">Selecciona un servicio</option>
            <option value="reparacion">Reparación</option>
            <option value="mantenimiento">Mantenimiento</option>
            <option value="instalacion">Instalación</option>
            <option value="limpieza">Limpieza</option>
            <option value="paseo">Paseo de mascotas</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Descripción del trabajo</label>
          <textarea
            className="w-full h-24 p-2 border rounded-md"
            placeholder="Describe detalladamente qué necesitas..."
            value={bookingDetails.description}
            onChange={(e) => onChangeDetails({ ...bookingDetails, description: e.target.value })}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium">Fotos</label>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <input
              type="file"
              className="flex-1 p-2 border rounded-md"
              placeholder="Ingresa tu dirección completa"
              value={bookingDetails.address}
              onChange={(e) => onChangeDetails({ ...bookingDetails, address: e.target.value })}
            />
          </div>
        </div>
      </div>
      {/* Botón de confirmar */}
      <div className="flex space-x-3">
        <Button
          type="button"
          onClick={handleSubmit}
          className="flex-1 text-white bg-orange-500 hover:bg-orange-600"
          disabled={!bookingDetails.service || !bookingDetails.description || !bookingDetails.address}
        >
          Confirmar Reserva
        </Button>
      </div>
      
    </div>

  )
}
// "use client"

// import { format } from "date-fns"
// import { es } from "date-fns/locale"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { User, Calendar as CalendarIcon, Clock, MapPin } from "lucide-react"
// import { createAppointment } from "@/services/appointments"
// import { useAuth } from "@/context/authcontext"

// interface Professional {
//   name: string
//   id: string
// }

// interface TimeSlot {
//   id: string
//   startTime: Date
//   endTime: Date
//   available: boolean
// }

// interface BookingDetails {
//   service: string
//   description: string
//   photos?: FileList
// }

// interface ConfirmStepProps {
//   professional: Professional
//   selectedDate: Date
//   selectedTimeSlot: TimeSlot
//   bookingDetails: BookingDetails
//   onChangeDetails: (details: BookingDetails) => void
//   onBack: () => void
//   onSubmit: () => void
// }

// export default function ConfirmStep({
//   professional,
//   selectedDate,
//   selectedTimeSlot,
//   bookingDetails,
//   onChangeDetails,
//   onBack,
//   onSubmit,
// }: ConfirmStepProps) {
//   const { user, token } = useAuth()
//   if (!token) {
//     console.error("Token ausente")
//     return null
//   }

//   const handleSubmit = async () => {
//     const clientId = user?.id || ""
//     const startTimeUtc = new Date(selectedTimeSlot.startTime).toISOString()
//     const imageFile = bookingDetails.photos?.[0]

//     let imageBase64 = ""

//     if (imageFile) {
//       try {
//         imageBase64 = await new Promise<string>((resolve, reject) => {
//           const reader = new FileReader()
//           reader.onload = () => resolve(reader.result as string)
//           reader.onerror = reject
//           reader.readAsDataURL(imageFile)
//         })
//       } catch (error) {
//         console.error("Error al convertir imagen:", error)
//         return
//       }
//     }

//     const payload = {
//       clientId,
//       professionalId: professional.id,
//       startTime: startTimeUtc,
//       description: bookingDetails.description,
//      status: "pending" as const,
//       imageFile: imageBase64,
//     }

//     try {
//       const res = await createAppointment(payload, token)
//       console.log("Reserva creada:", res)
//       onSubmit()
//     } catch (err) {
//       console.error("Error al crear la reserva:", err)
//     }
//   }

//   return (
//     <div className="space-y-4">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <h3 className="text-lg font-zen-dots">Confirmar reserva</h3>
//         <Button variant="outline" onClick={onBack}>
//           Cambiar horario
//         </Button>
//       </div>

//       {/* Resumen */}
//       <Card className="border-orange-200 bg-orange-50">
//         <CardHeader>
//           <CardTitle className="text-lg text-orange-800 font-zen-dots">
//             Resumen de tu reserva
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-3">
//           <div className="flex items-center space-x-2">
//             <User className="w-4 h-4 text-orange-600" />
//             <span>{professional.name}</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <CalendarIcon className="w-4 h-4 text-orange-600" />
//             <span>{format(selectedDate, "EEEE, dd/MM/yyyy", { locale: es })}</span>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Clock className="w-4 h-4 text-orange-600" />
//             <span>
//               {format(selectedTimeSlot.startTime, "HH:mm")} - {format(selectedTimeSlot.endTime, "HH:mm")}
//               <span className="ml-2 text-sm text-gray-600">(Franja de 3 horas)</span>
//             </span>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Detalles del servicio */}
//       <div className="space-y-4">
//         <div>
//           <label className="block mb-2 text-sm font-medium">Tipo de servicio</label>
//           <select
//             className="w-full p-2 border rounded-md"
//             value={bookingDetails.service}
//             onChange={(e) => onChangeDetails({ ...bookingDetails, service: e.target.value })}
//           >
//             <option value="">Selecciona un servicio</option>
//             <option value="reparacion">Reparación</option>
//             <option value="mantenimiento">Mantenimiento</option>
//             <option value="instalacion">Instalación</option>
//             <option value="limpieza">Limpieza</option>
//             <option value="paseo">Paseo de mascotas</option>
//           </select>
//         </div>

//         <div>
//           <label className="block mb-2 text-sm font-medium">Descripción del trabajo</label>
//           <textarea
//             className="w-full h-24 p-2 border rounded-md"
//             placeholder="Describe detalladamente qué necesitas..."
//             value={bookingDetails.description}
//             onChange={(e) => onChangeDetails({ ...bookingDetails, description: e.target.value })}
//           />
//         </div>

//         <div>
//           <label className="block mb-2 text-sm font-medium">Fotos</label>
//           <div className="flex items-center space-x-2">
//             <MapPin className="w-4 h-4 text-gray-400" />
//             <input
//               type="file"
//               accept="image/*"
//               multiple
//               className="flex-1 p-2 border rounded-md"
//               onChange={(e) => onChangeDetails({ ...bookingDetails, photos: e.target.files })}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Botón de confirmar */}
//       <div className="flex space-x-3">
//         <Button
//           type="button"
//           onClick={handleSubmit}
//           className="flex-1 text-white bg-orange-500 hover:bg-orange-600"
//           disabled={
//             !bookingDetails.service ||
//             !bookingDetails.description ||
//             !bookingDetails.address ||
//             !bookingDetails.photos ||
//             bookingDetails.photos.length === 0
//           }
//         >
//           Confirmar Reserva
//         </Button>
//       </div>
//     </div>
//   )
// }