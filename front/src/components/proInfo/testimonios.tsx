import Image from "next/image"
import { Card } from "../ui/card"
import { Star } from "lucide-react"


export const Testimonios = () => {
  return ( 
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
                  "El sistema de Citas es muy confiable y el soporte al cliente es excepcional. Recomiendo Home Hero a todos mis colegas.",
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
  )}