import { ArrowRight, DollarSign, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"

 
 
 
  export const HeroProInfo = () => {
  return (
 
 
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
      )
    }