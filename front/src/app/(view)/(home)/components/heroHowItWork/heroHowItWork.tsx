import { CheckCircle, Clock, Search } from "lucide-react"
import React from "react"

export  const HowItWork = () => {
return (
 <section id="como-funciona" className="py-20 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 font-Title md:text-4xl">¿Cómo Funciona?</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 font-Text">
              Proceso simple y seguro para conectarte con el profesional ideal
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-orange-100 rounded-full">
                <Search className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="mb-4 text-xl font-bold font-Title">1. Busca</h3>
              <p className="text-gray-600 font-Text">
                Encuentra el profesional perfecto para tu necesidad específica
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full">
                <Clock className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="mb-4 text-xl font-bold font-Title">2. Agenda</h3>
              <p className="text-gray-600 font-Text">Selecciona fecha y hora que mejor se adapte a tu horario</p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="mb-4 text-xl font-bold font-Title">3. Disfruta</h3>
              <p className="text-gray-600 font-Text">Recibe un servicio de calidad con garantía y tranquilidad</p>
            </div>
          </div>
        </div>
      </section>
)
}