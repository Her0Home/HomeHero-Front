import { Award, Clock, Star, Users } from "lucide-react"
import { Card } from "../ui/card"
import { Badge } from "../ui/badge"

  export const Oportunidades = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-900 font-Title md:text-4xl">
              Oportunidades de Crecimiento
            </h3>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 font-Text">
              Desarrolla tu carrera profesional con herramientas y recursos exclusivos
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-orange-500 rounded-lg">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-bold font-Title">Certificaciones</h4>
                  <p className="mb-4 text-gray-600 font-Text">
                    Accede a cursos de capacitación y obtén certificaciones que aumenten tu credibilidad y tarifas.
                  </p>
                  <Badge variant="secondary">Próximamente</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-blue-500 rounded-lg">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-bold font-Title">Programa de Recompensas</h4>
                  <p className="mb-4 text-gray-600 font-Text">
                    Gana puntos por cada servicio completado y canjéalos por beneficios exclusivos.
                  </p>
                  <Badge variant="secondary">Próximamente</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-bold font-Title">Flexibilidad Total</h4>
                  <p className="mb-4 text-gray-600 font-Text">
                    Trabaja cuando quieras, establece tus propias tarifas y elige los servicios que prefieres ofrecer.
                  </p>
                  <Badge className="text-green-800 bg-green-100">Disponible</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-purple-500 rounded-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="mb-2 text-xl font-bold font-Title">Comunidad</h4>
                  <p className="mb-4 text-gray-600 font-Text">
                    Únete a una comunidad de profesionales, comparte experiencias y aprende de los mejores.
                  </p>
                  <Badge className="text-purple-800 bg-purple-100">Próximamente</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
  )}