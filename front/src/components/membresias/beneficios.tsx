import { Users, TrendingUp, Calendar } from "lucide-react";


 
const BeneficiosPro = () => {
  return ( 
    <div className="grid gap-8 mb-12 md:grid-cols-3">
    <div className="text-center">
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full">
        <Users className="w-8 h-8 text-orange-500" />
      </div>
      <h3 className="mb-2 text-xl font-bold font-Title">Más Clientes</h3>
      <p className="text-gray-600 font-Text">
        Accede a nuestra base de más de 10,000 clientes activos buscando servicios profesionales
      </p>
    </div>

    <div className="text-center">
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
        <TrendingUp className="w-8 h-8 text-blue-500" />
      </div>
      <h3 className="mb-2 text-xl font-bold font-Title">Aumenta tus Ingresos</h3>
      <p className="text-gray-600 font-Text">
        Los profesionales en nuestra plataforma aumentan sus ingresos en promedio un 40%
      </p>
    </div>

    <div className="text-center">
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
        <Calendar className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="mb-2 text-xl font-bold font-Title">Gestión Simplificada</h3>
      <p className="text-gray-600 font-Text">
        Herramientas integradas para gestionar tu agenda y comunicación con clientes
      </p>
    </div>
  </div>
   );
}
 
export default BeneficiosPro;