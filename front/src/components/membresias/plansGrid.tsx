import { ArrowRight, CheckCircle, Crown, Shield, Star, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import Link from "next/link"
import { Button } from "../ui/button"


export default function PlansGrid() {


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
        { name: "Hasta 5 días en destacados por mes", included: true },
        { name: "Gestión automatizada de agenda", included: true },
        { name: "Solicitudes via email", included: true },
        { name: "Estadísticas básicas", included: true },
         { name: "Soporte via email", included: true },
        { name: "Prioridad en búsquedas", included: false },
        { name: "Soporte tecnico 24/7", included: false },
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
        { name: "Hasta 10 días en destacados por mes", included: true },
        { name: "Prioridad en búsquedas", included: true },
        { name: "Soporte por chat", included: true },
        { name: "Promociones destacadas", included: false },
        { name: "Soporte tecnico 24/7", included: false },
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
        { name: "Hasta 15 días en destacados por mes", included: true },
        { name: "Promociones destacadas", included: true },
        { name: "Soporte tecnico 24/7", included: true },
      ]
    },
  ] 
return (
       <div className=" bg-gray-50">
     

      <div className="container px-4 py-12 mx-auto">
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

                  {/* <div className="text-center">
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
                  </div> */}
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
        </div>
        </div>
)
}