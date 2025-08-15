import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, DollarSign, Calendar, Shield, Users, TrendingUp, Clock, Award, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProfessionalInfoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
    

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold leading-tight text-gray-900 font-Title md:text-5xl">
                  Únete a<span className="block logo font-Name">Home Hero</span>
                  <span className="block text-blue-600">como Profesional</span>
                </h2>
                <p className="text-xl leading-relaxed text-gray-600 font-Text">
                  Conecta con miles de clientes, gestiona tu agenda de forma inteligente y haz crecer tu negocio con
                  nuestra plataforma líder.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2">
                    <DollarSign className="w-6 h-6 text-green-500" />
                    <div>
                      <p className="font-Title ">+40%</p>
                      <p className="text-sm text-gray-600 font-Text">Más ingresos</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center space-x-2">
                    <Users className="w-6 h-6 text-blue-500" />
                    <div>
                      <p className=" font-Title">10K+</p>
                      <p className="text-sm text-gray-600 font-Text">Clientes activos</p>
                    </div>
                    
                  </div>
                </div>
                <div className="text-center">
          <h3 className="mb-4 text-2xl font-bold text-gray-900 font-Title">¿Listo para hacer crecer tu negocio?</h3>
          <p className="max-w-2xl mx-auto mb-8 text-gray-600 font-Text">
            Contratá tu membresía y empezá a trabajar con nosotros. ¡Sumate a Home Hero y potenciá tus ingresos desde hoy!
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/membresias">
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

            <div className="relative">
              <Image
                src="https://ik.imagekit.io/ankxi835d/Home%20Hero/Plomero%20exitoso.jpg?updatedAt=1754839195741"
                alt="Profesional exitoso"
                width={400}
                height={500}
                className="shadow-2xl rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-900 font-Title md:text-4xl">
              ¿Por qué elegir Home Hero?
            </h3>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 font-Text">
              Descubre todos los beneficios de formar parte de nuestra comunidad de profesionales
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full">
                  <Calendar className="w-8 h-8 text-orange-500" />
                </div>
                <CardTitle className="text-xl font-Title">Gestión Inteligente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-gray-600 font-Text">
                  Dashboard personalizable, agenda automática y notificaciones en tiempo real para no perder ninguna
                  oportunidad.
                </p>
                <ul className="space-y-1 text-sm text-gray-500 font-Text">
                  <li>✓ Calendario sincronizado</li>
                  <li>✓ Notificaciones push</li>
                  <li>✓ Gestión de citas</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                  <TrendingUp className="w-8 h-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl font-Title">Más Clientes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-gray-600 font-Text">
                  Accede a una base de más de 10,000 clientes activos buscando servicios profesionales de calidad.
                </p>
                <ul className="space-y-1 text-sm text-gray-500 font-Text">
                  <li>✓ Perfil público optimizado</li>
                  <li>✓ Sistema de reseñas</li>
                  <li>✓ Búsqueda por ubicación</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
                  <Shield className="w-8 h-8 text-green-500" />
                </div>
                <CardTitle className="text-xl font-Title">Pagos Seguros</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-gray-600 font-Text">
                  Sistema de pagos integrado, protección contra fraudes y transferencias automáticas a tu cuenta.
                </p>
                <ul className="space-y-1 text-sm text-gray-500 font-Text">
                  <li>✓ Pagos garantizados</li>
                  <li>✓ Transferencias rápidas</li>
                  <li>✓ Soporte 24/7</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Oportunidades */}
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
                  <Badge className="text-purple-800 bg-purple-100">Disponible</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-900 font-Title md:text-4xl">
              Lo que dicen nuestros profesionales
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Carlos Mendoza",
                profession: "Electricista",
                rating: 4.9,
                comment:
                  "Desde que me uní a Home Hero, mis ingresos aumentaron un 45%. La plataforma es muy fácil de usar y los clientes son excelentes.",
                image: "https://ik.imagekit.io/ankxi835d/Home%20Hero/electricistaProfile.jpg?updatedAt=1754778578455",
              },
              {
                name: "María González",
                profession: "Cuidadora de Mascotas",
                rating: 5.0,
                comment:
                  "Me encanta la flexibilidad que me da Home Hero. Puedo trabajar cuando quiero y siempre tengo clientes esperando mis servicios.",
                image: "https://ik.imagekit.io/ankxi835d/Home%20Hero/aseoProfile.jpg?updatedAt=1754778577652",
              },
              {
                name: "Roberto Jiménez",
                profession: "Plomería",
                rating: 4.8,
                comment:
                  "El sistema de pagos es muy confiable y el soporte al cliente es excepcional. Recomiendo Home Hero a todos mis colegas.",
                image: "https://ik.imagekit.io/ankxi835d/Home%20Hero/plomeroPerfil.jpg?updatedAt=1754778343505",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="items-center justify-center p-6">
                <div className="flex items-center mb-4 space-x-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-md"
                  />
                  <div>
                    <h4 className="font-bold font-Title">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 font-Text">{testimonial.profession}</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(testimonial.rating) ? "text-yellow-500 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-sm font-bold">{testimonial.rating}</span>
                    </div>
                  </div>
                </div>
                <p className="italic text-gray-700 font-Text">{testimonial.comment}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-600">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h3 className="text-3xl font-bold text-white font-Title md:text-4xl">¿Listo para Comenzar tu Éxito?</h3>
            <p className="text-xl font-Text text-white/90">
              Únete a más de 500 profesionales que ya están creciendo con Home Hero
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/register">
                <Button size="lg" className="px-8 py-4 text-lg text-orange-600 bg-white font-Text hover:bg-gray-100">
                  Registrarse Ahora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/membresias">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-4 text-lg text-white bg-transparent border-white font-Text hover:bg-white/10"
              >
                Más Información
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}