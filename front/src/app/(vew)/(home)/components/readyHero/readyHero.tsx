import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import Link from "next/link"
import React from "react"

const isLoggedIn = false;
export const ReadyHero = () => {
    return (
      <section className="py-20 bg-gradient-to-r from-orange-500 to-blue-600">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-white font-Title md:text-4xl">¿Listo para comenzar?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl font-Text text-white/90">
            Únete a miles de usuarios que ya confían en Home Hero para el cuidado de su hogar
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            {isLoggedIn ? (
              <Link href="/cliente/dashboard">
                <Button size="lg" className="text-orange-600 bg-white hover:bg-gray-100">
                  <User className="w-5 h-5 mr-2" />
                  Ir a mi Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link href="/registro">
                  <Button size="lg" className="text-orange-600 bg-white font-Text hover:bg-gray-100">
                    Registrarse Gratis
                  </Button>
                </Link>
                <Link href="/infopro">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white bg-transparent border-white font-Text hover:bg-white hover:text-orange-600"
                  >
                    Ser Profesional
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>
       )}