"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent} from "@/components/ui/card"
import { format } from "date-fns"
import Image from "next/image"
import { getAvailability } from "@/services/appointments"
import { useAuth } from "@/context/authcontext"
import { StepDate } from "./modalApointments/stepDate"
import TimeStep from "./modalApointments/stepTime"
import ConfirmStep from "./modalApointments/stepConfirm"



interface Professional {
  id: string
  name: string
  description: string
  imageProfile: string
}

interface BookingModalProps {
  professionalId: string
  professional: Professional
  children: React.ReactNode
}

interface TimeSlot {
  id: string
  startTime: Date
  endTime: Date
  available: boolean
}

export function BookingModal({ professional, children }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlot>()
  const [step, setStep] = useState<"date" | "time" | "confirm">("date")
  const [bookingDetails, setBookingDetails] = useState({
    service: "",
    description: "",
    address: "",
  })
  const { token } = useAuth();

  // Generar franjas horarias de 4 horas para el día seleccionado
  
const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])
const [loadingSlots, setLoadingSlots] = useState(false)


  // const timeSlots = selectedDate ? generateTimeSlots(selectedDate) : []

  const handleDateSelect = async (date: Date | undefined) => {
  setSelectedDate(date)
  setSelectedTimeSlot(undefined)
  setStep("time")

  if (!date) return

  setLoadingSlots(true)
  if(!token) return
  try {
    const formattedDate = format(date, "yyyy-MM-dd")
    console.log(professional.id)
    console.log("Fecha formateada:", formattedDate) // Asegurate del formato que espera el backend
    const slots = await getAvailability(professional.id, formattedDate, token)
    setTimeSlots(slots)
  } catch (error) {
    console.error("Error al obtener disponibilidad:", error)
    setTimeSlots([])
  } finally {
    setLoadingSlots(false)
  }
}



  const handleTimeSlotSelect = (slot: TimeSlot) => {
    setSelectedTimeSlot(slot)
    setStep("confirm")
  }

  const handleBookingSubmit = () => {
    // Aquí se enviaría la reserva al backend
    console.log("Reserva enviada:", {
      professional: professional.id,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      details: bookingDetails,
    })


    alert(
      "¡Solicitud de reserva enviada! El profesional confirmará el horario específico dentro de tu franja seleccionada.",
    )
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-Title">Reservar cita con {professional.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Información del profesional */}
          <Card>
            <CardContent className="flex items-center p-4 space-x-4">
              <div className="relative w-16 h-16">
              <Image
                src={professional.imageProfile || "/placeholder.svg"}
                alt={professional.name}
                fill
                className="object-cover rounded-full"
              />
              </div>
              <div className="flex-1">
                <h3 className="font-bold font-Title">{professional.name}</h3>
                <p className="text-hero-orange font-Text">{professional.description}</p>
              </div>
            </CardContent>
          </Card>

          {/* Paso 1: Seleccionar fecha */}
          {step === "date" && (
           <StepDate
             selectedDate={selectedDate}
             handleDateSelect={handleDateSelect}
           />
          )}

          {/* Paso 2: Seleccionar franja horaria */}
          {step === "time" && selectedDate && (
            <TimeStep
              selectedDate={selectedDate}
              timeSlots={timeSlots}
              onBack={() => setStep("date")}
              onSelect={handleTimeSlotSelect}
            />
          )}

          {/* Paso 3: Confirmar reserva */}
          {step === "confirm" && selectedDate && selectedTimeSlot && (
            <ConfirmStep
              professional={professional}
              selectedDate={selectedDate}
              selectedTimeSlot={selectedTimeSlot}
              bookingDetails={bookingDetails}
              onChangeDetails={setBookingDetails}
              onBack={() => setStep("time")}
              onSubmit={handleBookingSubmit}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}