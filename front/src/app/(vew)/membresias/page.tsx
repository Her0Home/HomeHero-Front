"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { CheckCircle, X, Star, Crown, Shield, Users, TrendingUp, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ProfessionalMembershipsPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      id: "monthly",
      name: "Plan Mensual",
      description: "Perfecto para profesionales que están empezando",
      monthlyPrice: 29,
      annualPrice: 20,
      icon: <Shield className="w-8 h-8" />,
      color: "from-gray-500 to-gray-600",
      popular: false,
      features: [
        { name: "Perfil profesional completo", included: true },
        { name: "Hasta 20 solicitudes por mes", included: true },
        { name: "Gestión básica de agenda", included: true },
        { name: "Soporte por email", included: true },
        { name: "Comisión por servicio: 10%", included: true },
        { name: "Estadísticas básicas", included: true },
        { name: "Prioridad en búsquedas", included: false },
        { name: "Herramientas de marketing", included: false },
        { name: "Soporte prioritario", included: false },
        { name: "Insignia de profesional verificado", included: false },
      ],
    },
    {
      id: "quarterly",
      name: "Plan Trimestral",
      description: "Ideal para profesionales establecidos que buscan crecer",
      monthlyPrice: 25,
      annualPrice: 18,
      icon: <Star className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      popular: true,
      features: [
        { name: "Todo del plan Básico", included: true },
        { name: "Hasta 50 solicitudes por mes", included: true },
        { name: "Prioridad en búsquedas", included: true },
        { name: "Herramientas de marketing básicas", included: true },
        { name: "Comisión por servicio: 8%", included: true },
        { name: "Estadísticas avanzadas", included: true },
        { name: "Soporte por chat", included: true },
        { name: "Insignia de profesional verificado", included: true },
        { name: "Promociones destacadas", included: false },
        { name: "Soporte telefónico 24/7", included: false },
      ],
    },
    {
      id: "annual",
      name: "Plan Annual",
      description: "Para profesionales que quieren maximizar su alcance",
      monthlyPrice: 20,
      annualPrice: 15,
      icon: <Crown className="w-8 h-8" />,
      color: "from-blue-500 to-purple-600",
      popular: false,
      features: [
        { name: "Todo del plan Profesional", included: true },
        { name: "Solicitudes ilimitadas", included: true },
        { name: "Máxima prioridad en búsquedas", included: true },
        { name: "Herramientas de marketing avanzadas", included: true },
        { name: "Comisión por servicio: 5%", included: true },
        { name: "Promociones destacadas", included: true },
        { name: "Soporte telefónico 24/7", included: true },
        { name: "Gestor de cuenta dedicado", included: true },
        { name: "Acceso a eventos exclusivos", included: true },
        { name: "Análisis de competencia", included: true },
      ],
    },
  ]

  const getPrice = (plan: any) => {
    return isAnnual ? plan.annualPrice : plan.monthlyPrice
  }

  const getSavings = (plan: any) => {
    if (!isAnnual) return 0
    return Math.round(((plan.monthlyPrice - plan.annualPrice) / plan.monthlyPrice) * 100)
  }

  return (
    <div className="min-h-screen bg-gray-50">
     

      <div className="container px-4 py-12 mx-auto">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 font-Title md:text-5xl">
            Elige tu{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text">
              Plan Profesional
            </span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-600 font-Text">
            Selecciona el plan que mejor se adapte a tus necesidades y comienza a hacer crecer tu negocio
          </p>

          {/* Toggle Anual/Mensual */}
          {/* <div className="flex items-center justify-center mb-8 space-x-4">
            <span className={`font-semibold ${!isAnnual ? "text-orange-600" : "text-gray-600"}`}>Mensual</span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} className="data-[state=checked]:bg-orange-500" />
            <span className={`font-semibold ${isAnnual ? "text-orange-600" : "text-gray-600"}`}>Anual</span>
            {isAnnual && <Badge className="ml-2 text-green-800 bg-green-100">Ahorra hasta 31%</Badge>}
          </div> */}
        </div>

        {/* Plans Grid */}
        <div className="grid gap-8 mb-12 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.popular ? "border-2 border-orange-500 scale-105" : "hover:scale-105"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 py-2 text-sm text-center text-white font-Title bg-gradient-to-r from-orange-500 to-blue-500">
                  ⭐ Más Popular
                </div>
              )}

              <CardHeader className={plan.popular ? "pt-12" : ""}>
                <div className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}
                  >
                    {plan.icon}
                  </div>
                  <CardTitle className="mb-2 text-2xl font-Title">{plan.name}</CardTitle>
                  <p className="mb-4 text-sm text-gray-600">{plan.description}</p>

                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900 font-Text">
                      ${getPrice(plan)}
                      <span className="text-lg font-normal text-gray-500 font-Text">/{isAnnual ? "mes" : "mes"}</span>
                    </div>
                    {isAnnual && getSavings(plan) > 0 && (
                      <div className="text-sm font-semibold text-green-600 font-Text">Ahorra {getSavings(plan)}%</div>
                    )}
                    {!isAnnual && <div className="text-sm text-gray-500 font-Text">Facturado mensualmente</div>}
                    {isAnnual && (
                      <div className="text-sm text-gray-500 font-Text">${getPrice(plan) * 12} facturado anualmente</div>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 font-Text">
                      {feature.included ? (
                        <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-500" />
                      ) : (
                        <X className="flex-shrink-0 w-5 h-5 text-gray-300" />
                      )}
                      <span className={`text-sm ${feature.included ? "text-gray-700" : "text-gray-400"}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link href={`/profesional/registro?plan=${plan.id}`}>
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600 text-white"
                          : "bg-gray-900 hover:bg-gray-800 text-white"
                      }`}
                    >
                      Comenzar con {plan.name}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="p-8 mb-12 bg-white border rounded-lg shadow-sm">
          <h3 className="mb-8 text-2xl font-bold text-center text-gray-900 font-Title">
            Comparación Detallada de Planes
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-4 text-lg text-left font-Title">Característica</th>
                  <th className="px-4 py-4 text-lg text-center font-Title">Básico</th>
                  <th className="px-4 py-4 text-lg text-center font-Title">Profesional</th>
                  <th className="px-4 py-4 text-lg text-center font-Title">Premium</th>
                </tr>
              </thead>
              <tbody className="font-Text">
                <tr className="border-b">
                  <td className="px-4 py-4 font-semibold">Precio mensual</td>
                  <td className="px-4 py-4 text-center">$29 USD</td>
                  <td className="px-4 py-4 text-center">$25 USD</td>
                  <td className="px-4 py-4 text-center">$20 USD</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-4">Solicitudes por mes</td>
                  <td className="px-4 py-4 text-center">Hasta 20</td>
                  <td className="px-4 py-4 text-center">Hasta 50</td>
                  <td className="px-4 py-4 text-center">Ilimitadas</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-4">Comisión por servicio</td>
                  <td className="px-4 py-4 text-center">10%</td>
                  <td className="px-4 py-4 text-center">8%</td>
                  <td className="px-4 py-4 text-center">5%</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-4">Prioridad en búsquedas</td>
                  <td className="px-4 py-4 text-center">
                    <X className="w-5 h-5 mx-auto text-gray-300" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <CheckCircle className="w-5 h-5 mx-auto text-green-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <CheckCircle className="w-5 h-5 mx-auto text-green-500" />
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-4">Herramientas de marketing</td>
                  <td className="px-4 py-4 text-center">
                    <X className="w-5 h-5 mx-auto text-gray-300" />
                  </td>
                  <td className="px-4 py-4 text-center">Básicas</td>
                  <td className="px-4 py-4 text-center">Avanzadas</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-4">Soporte</td>
                  <td className="px-4 py-4 text-center">Email</td>
                  <td className="px-4 py-4 text-center">Email + Chat</td>
                  <td className="px-4 py-4 text-center">24/7 + Teléfono</td>
                </tr>
                <tr>
                  <td className="px-4 py-4">Gestor de cuenta</td>
                  <td className="px-4 py-4 text-center">
                    <X className="w-5 h-5 mx-auto text-gray-300" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <X className="w-5 h-5 mx-auto text-gray-300" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <CheckCircle className="w-5 h-5 mx-auto text-green-500" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

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
              Herramientas integradas para gestionar tu agenda, pagos y comunicación con clientes
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
                  No, todos nuestros planes son sin compromiso. Puedes cancelar tu suscripción en cualquier momento.
                </p>
              </div>

              <div>
                <h4 className="mb-2 font-semibold text-gray-900">¿Cómo funciona la comisión por servicio?</h4>
                <p className="text-sm text-gray-600 font-Text">
                  La comisión se descuenta automáticamente de cada pago que recibas. Es nuestro único costo adicional.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="mb-2 font-semibold text-gray-900">¿Ofrecen garantía de devolución de dinero?</h4>
                <p className="text-sm text-gray-600 font-Text">
                  Sí, ofrecemos una garantía de 30 días. Si no estás satisfecho, te devolvemos tu dinero completo.
                </p>
              </div>

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
