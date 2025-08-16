
import ComparacionPlanes from "@/components/membresias/comparacionPlanes"
import HeroMembresias from "@/components/membresias/heroMembresias"
import PlansGrid from "@/components/membresias/plansGrid"
import { Button } from "@/components/ui/button"
import {  Users, TrendingUp, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ProfessionalMembershipsPage() {


  return (
    <div className="min-h-screen bg-gray-50">
     

      <div className="container px-4 py-12 mx-auto">
        {/* Hero Section */}
        <HeroMembresias/>

        {/* Plans Grid */}
        <PlansGrid/>

        {/* Features Comparison */}
        <ComparacionPlanes/>

        {/* Benefits Section */}
        <div className="grid gap-8 mb-12 md:grid-cols-3">
          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full">
              <Users className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="mb-2 text-xl font-bold font-Title">Más Clientes</h3>
            <p className="text-gray-600 font-Text">
              Accede a nuestra base de más de 10,000 clientes activos buscando servicios profesionales
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
              <TrendingUp className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="mb-2 text-xl font-bold font-Title">Aumenta tus Ingresos</h3>
            <p className="text-gray-600 font-Text">
              Los profesionales en nuestra plataforma aumentan sus ingresos en promedio un 40%
            </p>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
              <Calendar className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="mb-2 text-xl font-bold font-Title">Gestión Simplificada</h3>
            <p className="text-gray-600 font-Text">
              Herramientas integradas para gestionar tu agenda y comunicación con clientes
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="p-8 mb-12 bg-gray-100 rounded-lg">
          <h3 className="mb-8 text-2xl font-bold text-center text-gray-900 font-Title">Preguntas Frecuentes</h3>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <h4 className="mb-2 font-semibold text-gray-900">¿Puedo cambiar de plan en cualquier momento?</h4>
                <p className="text-sm text-gray-600 font-Text">
                  Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se reflejarán en tu próximo
                  ciclo de facturación.
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-semibold text-gray-900">¿Hay algún contrato o compromiso a largo plazo?</h4>
                <p className="text-sm text-gray-600 font-Text">
                  No, todos nuestros planes son sin compromiso. Puedes cancelar tu suscripción en cualquier momento. Pero no se te devolverá el dinero de los días no utilizados.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="mb-2 font-semibold text-gray-900">¿Qué métodos de pago aceptan?</h4>
                <p className="text-sm text-gray-600 font-Text">
                  Aceptamos todas las tarjetas de crédito principales, PayPal y transferencias bancarias.
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-semibold text-gray-900">¿Hay descuentos para pagos anuales?</h4>
                <p className="text-sm text-gray-600 font-Text">
                  Sí, al pagar anualmente obtienes hasta un 31% de descuento comparado con el pago mensual.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="mb-4 text-2xl font-bold text-gray-900 font-Title">¿Listo para hacer crecer tu negocio?</h3>
          <p className="max-w-2xl mx-auto mb-8 text-gray-600 font-Text">
            Únete a miles de profesionales que ya están aumentando sus ingresos con Home Hero
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/profesional/registro?plan=quarterly">
              <Button
                size="lg"
                className="text-white bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600"
              >
                Comenzar Ahora
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
