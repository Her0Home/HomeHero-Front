import React from "react"
import { Calendar } from "../ui/calendar"
import { es } from "date-fns/locale"

interface dateProps {
    selectedDate: Date | undefined
    handleDateSelect: (date: Date | undefined) => void
}

export const StepDate = ({ selectedDate, handleDateSelect }: dateProps) => {
  return (
    <div>
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
  )
}