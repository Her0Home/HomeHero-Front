import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Calendar, Shield, TrendingUp } from "lucide-react";

 export const Beneficios = () => {
 return (
    <>
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
                  <li>✓ Notificaciones instantáneas</li>
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
                <CardTitle className="text-xl font-Title">Usuarios Seguros</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-center">
                <p className="text-gray-600 font-Text">
                  Sistema de Calificacion de usuarios integrado, protección contra fraudes.
                </p>
                <ul className="space-y-1 text-sm text-gray-500 font-Text">
                  <li>✓ Usuarios Verificados</li>
                  <li>✓ Usuarios Calificados </li>
                  <li>✓ Soporte 24/7</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
 )
}