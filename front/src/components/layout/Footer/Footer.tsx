import NameLogo from "@/components/Logo/logo";
import React from "react";
export const Footer = () => {
    return(
        <footer className="py-12 text-white bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center mb-4 space-x-2">
                <NameLogo/>
              </div>
              <p className="text-gray-400 font-Textn">Conectando hogares con profesionales de confianza</p>
            </div>

            <div>
              <h4 className="mb-4 font-bold font-Title">Servicios</h4>
              <ul className="space-y-2 text-gray-400 font-Text">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Electricista
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Plomería
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Limpieza
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Jardinería
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold font-Title">Empresa</h4>
              <ul className="space-y-2 text-gray-400 font-Text">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Acerca de
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Términos
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Privacidad
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold font-Title">Soporte</h4>
              <ul className="space-y-2 text-gray-400 font-Text">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Centro de Ayuda
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Chat en Vivo
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Garantías
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 mt-8 text-center border-t border-gray-800">
            <p className="text-gray-400 font-Text">© 2025 Home Hero. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    )
}