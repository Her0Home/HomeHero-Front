import { Button } from "@/components/ui/button"
import {  ArrowRight } from "lucide-react"
import Link from "next/link"

import { Beneficios } from "@/components/proInfo/beneficios"
import { HeroProInfo } from "@/components/proInfo/heroProInfo"
import { Oportunidades } from "@/components/proInfo/oportunidades"
import { Testimonios } from "@/components/proInfo/testimonios"
import HeroMembresias from "@/components/membresias/heroMembresias"
import PlansGrid from "@/components/membresias/plansGrid"

export default function ProfessionalInfoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
    

      {/* Hero Section */}
     <HeroProInfo/>

      {/* Beneficios */}
      <Beneficios/>
<HeroMembresias/>
<PlansGrid/>
      {/* Oportunidades */}
      <Oportunidades/>

      {/* Testimonios */}
      <Testimonios/>

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