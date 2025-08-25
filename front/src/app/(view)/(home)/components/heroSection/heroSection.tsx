import React from "react";
import {
  CheckCircle,
  Clock,
  Shield,
  
} from "lucide-react"
// import Link from "next/link"
import { Badge } from "@/components/ui/badge";

export  const HeroSection = () => {
return (
    <>
    <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-6 text-4xl font-bold text-hero-black font-Title md:text-6xl">
            Profesionales para tu{" "}
            <span className="text-transparent bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text">Hogar</span>
          </h1>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-hero-black font-Text">
            Conectamos tu hogar con profesionales matriculados y verificados. Desde reparaciones hasta cuidado de
            mascotas.
          </p>

          

          <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Badge className="px-4 py-2 text-orange-800 transition-none bg-orange-100 font-Text hover:bg-orange-100 hover:text-orange-800 hover:shadow-none">
  <Shield className="w-4 h-4 mr-2" />
  Profesionales Verificados
</Badge>

<Badge className="px-4 py-2 text-blue-800 transition-none bg-blue-100 font-Text hover:bg-blue-100 hover:text-blue-800 hover:shadow-none">
  <Clock className="w-4 h-4 mr-2" />
  Agenda tu citas
</Badge>

<Badge className="px-4 py-2 text-green-800 transition-none bg-green-100 font-Text hover:bg-green-100 hover:text-green-800 hover:shadow-none">
  <CheckCircle className="w-4 h-4 mr-2" />
  Garantía de Calidad
</Badge>
          </div>

          {/* <div className="flex flex-col justify-center gap-4 sm:flex-row">
            {isLoggedIn ? (
              <Link href="/cliente/dashboard">
                <Button size="lg" className="text-white bg-orange-500 hover:bg-orange-600">
                  <User className="w-5 h-5 mr-2" />
                  Ir a mi Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/registro">
                  <Button size="lg" className="text-white bg-orange-500 hover:bg-orange-600">
                    Comenzar Ahora
                  </Button>
                </Link>
                <Link href="/profesional/info">
                  <Button size="lg" variant="outline" className="bg-transparent">
                    Ser Profesional
                  </Button>
                </Link>
              </>
            )}
          </div> */}
        </div>
      </section>
    </>
)
}