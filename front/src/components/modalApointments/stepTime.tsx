"use client"

import { format } from "date-fns"
import { es } from "date-fns/locale"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

interface TimeSlot {
  id: string
  startTime: Date
  endTime: Date
  available: boolean
}

interface TimeStepProps {
  selectedDate: Date
  timeSlots: TimeSlot[]
  onBack: () => void
  onSelect: (slot: TimeSlot) => void
}

export default function TimeStep({ selectedDate, timeSlots, onBack, onSelect }: TimeStepProps) {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-Title">
          Franjas disponibles para {format(selectedDate, "dd/MM/yyyy", { locale: es })}
        </h3>
        <Button variant="outlineGradient" onClick={onBack}>
          Cambiar fecha
        </Button>
      </div>

      {/* Lista de franjas */}
      <div className="grid gap-3">
        {timeSlots.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No hay franjas disponibles para esta fecha.
          </p>
        ) : (
          timeSlots.map((slot) => (
            <Card
              key={slot.id}
              role="button"
              aria-disabled={!slot.available}
              title={`${format(slot.startTime, "HH:mm")} - ${format(slot.endTime, "HH:mm")}`}
              className={`cursor-pointer transition-all ${
                slot.available
                  ? "hover:border-orange-500 hover:shadow-md"
                  : "opacity-50 cursor-not-allowed"
              }`}
              onClick={() => slot.available && onSelect(slot)}
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
          ))
        )}
      </div>

      {/* Nota informativa */}
      <div className="p-4 rounded-lg bg-blue-50">
        <p className="text-sm text-blue-800 font-Text">
          <strong>Nota:</strong> Selecciona una franja de 4 horas. El profesional confirmará el horario específico
          dentro de esta franja en las próximas horas.
        </p>
      </div>
    </div>
  )
}