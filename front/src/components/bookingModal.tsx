"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, CalendarIcon, User, MapPin } from "lucide-react"
import { format, addHours } from "date-fns"
import { es } from "date-fns/locale"

interface Professional {
  id: string
  name: string
  profession: string
  rating: number
  reviews: number
  image: string
  hourlyRate: number
}

interface BookingModalProps {
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

  // Generar franjas horarias de 4 horas para el día seleccionado
  const generateTimeSlots = (date: Date): TimeSlot[] => {
    const slots: TimeSlot[] = []
    const startHour = 8 // 8:00 AM
    const endHour = 20 // 8:00 PM

    for (let hour = startHour; hour < endHour; hour += 4) {
      const startTime = new Date(date)
      startTime.setHours(hour, 0, 0, 0)
      const endTime = addHours(startTime, 4)

      slots.push({
        id: `slot-${hour}`,
        startTime,
        endTime,
        available: Math.random() > 0.3, // Simulamos disponibilidad
      })
    }

    return slots
  }

  const timeSlots = selectedDate ? generateTimeSlots(selectedDate) : []

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date)
    if (date) {
      setStep("time")
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

    // Simular guardado de reserva
    const newBooking = {
      id: `booking_${Date.now()}`,
      professionalId: professional.id,
      professionalName: professional.name,
      service: bookingDetails.service,
      description: bookingDetails.description,
      address: bookingDetails.address,
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      status: "pending",
      createdAt: new Date().toISOString(),
    }

    // Guardar en localStorage para persistencia
    const existingBookings = JSON.parse(localStorage.getItem("clientBookings") || "[]")
    existingBookings.push(newBooking)
    localStorage.setItem("clientBookings", JSON.stringify(existingBookings))

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
              <img
                src={professional.image || "/placeholder.svg"}
                alt={professional.name}
                className="object-cover w-16 h-16 rounded-full"
              />
              <div className="flex-1">
                <h3 className="font-bold font-Title">{professional.name}</h3>
                <p className="text-hero-orange font-Text">{professional.profession}</p>
              </div>
            </CardContent>
          </Card>

          {/* Paso 1: Seleccionar fecha */}
          {step === "date" && (
            <div className="space-y-4">
              <h3 className="text-lg font-Title">Selecciona una fecha</h3>
              <div className="flex justify-center font-Text">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  disabled={(date) => date < new Date() || date.getDay() === 0} // No domingos ni fechas pasadas
                  locale={es}
                  className="border rounded-md"
                />
              </div>
            </div>
          )}

          {/* Paso 2: Seleccionar franja horaria */}
          {step === "time" && selectedDate && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-Title">
                  Franjas disponibles para {format(selectedDate, "dd/MM/yyyy", { locale: es })}
                </h3>
                <Button variant="outlineGradient" onClick={() => setStep("date")}>
                  Cambiar fecha
                </Button>
              </div>

              <div className="grid gap-3">
                {timeSlots.map((slot) => (
                  <Card
                    key={slot.id}
                    className={`cursor-pointer transition-all ${
                      slot.available ? "hover:border-orange-500 hover:shadow-md" : "opacity-50 cursor-not-allowed"
                    }`}
                    onClick={() => slot.available && handleTimeSlotSelect(slot)}
                  >
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-orange-500" />
                        <div>
                          <p className="font-semibold">
                            {format(slot.startTime, "HH:mm")} - {format(slot.endTime, "HH:mm")}
                          </p>
                          <p className="text-sm text-hero-orange font-Text">Franja de 4 horas</p>
                        </div>
                      </div>
                      <Badge variant={slot.available ? "default" : "secondary"}>
                        {slot.available ? "Disponible" : "Ocupado"}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="p-4 rounded-lg bg-blue-50">
                <p className="text-sm text-blue-800 font-Text">
                  <strong>Nota:</strong> Selecciona una franja de 4 horas. El profesional te confirmará el horario
                  específico dentro de esta franja en las próximas horas.
                </p>
              </div>
            </div>
          )}

          {/* Paso 3: Confirmar reserva */}
          {step === "confirm" && selectedDate && selectedTimeSlot && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-zen-dots">Confirmar reserva</h3>
                <Button variant="outline" onClick={() => setStep("time")}>
                  Cambiar horario
                </Button>
              </div>

              {/* Resumen de la reserva */}
              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-lg text-orange-800 font-zen-dots">Resumen de tu reserva</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-orange-600" />
                    <span>
                      {professional.name} - {professional.profession}
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
                      <span className="ml-2 text-sm text-gray-600">(Franja de 4 horas)</span>
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Detalles del servicio */}
              <div className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm font-medium">Tipo de servicio</label>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={bookingDetails.service}
                    onChange={(e) => setBookingDetails({ ...bookingDetails, service: e.target.value })}
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
                    onChange={(e) => setBookingDetails({ ...bookingDetails, description: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium">Dirección</label>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      className="flex-1 p-2 border rounded-md"
                      placeholder="Ingresa tu dirección completa"
                      value={bookingDetails.address}
                      onChange={(e) => setBookingDetails({ ...bookingDetails, address: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button
                  onClick={handleBookingSubmit}
                  className="flex-1 text-white bg-orange-500 hover:bg-orange-600"
                  disabled={!bookingDetails.service || !bookingDetails.description || !bookingDetails.address}
                >
                  Confirmar Reserva
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}