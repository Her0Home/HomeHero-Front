"use client"
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { routes } from "@/routes";
import { useAuth } from "@/context/authcontext";


const InvitacionPro = () => {
    const {isAuth}= useAuth()

  return ( 

    <div className="text-center">
    <h3 className="mb-4 text-2xl font-bold text-gray-900 font-Title">¿Listo para hacer crecer tu negocio?</h3>
    <p className="max-w-2xl mx-auto mb-8 text-gray-600 font-Text">
      Únete a miles de profesionales que ya están aumentando sus ingresos con Home Hero
    </p>
    <div className="flex flex-col justify-center gap-4 sm:flex-row">
      {isAuth === false ? (
        <Link href={routes.register}>
        <Button
          size="lg"
          className="text-white bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600"
        >
          Registrate
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>
      ):
      <Link href="#membresias" scroll={true} >
      <Button
        size="lg"
        className="text-white bg-gradient-to-r from-orange-500 to-blue-500 hover:from-orange-600 hover:to-blue-600"
      >
        Elige Tu plan 
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </Link>
      }
      
    </div>
  </div>

   );
}
 
export default InvitacionPro;