import { CheckCircle, X } from "lucide-react";

export default function ComparacionPlanes() {
return (
<div className="p-8 mb-12 bg-white border rounded-lg shadow-sm">
          <h3 className="mb-8 text-2xl font-bold text-center text-gray-900 font-Title">
            Comparación Detallada de Planes
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-4 text-lg text-left font-Title">Característica</th>
                  <th className="px-4 py-4 text-lg text-center font-Title">Mensual</th>
                  <th className="px-4 py-4 text-lg text-center font-Title">Trimestral</th>
                  <th className="px-4 py-4 text-lg text-center font-Title">Anual</th>
                </tr>
              </thead>
              <tbody className="font-Text">
                <tr className="border-b">
                  <td className="px-4 py-4 font-semibold">Precio mensual</td>
                  <td className="px-4 py-4 text-center">$29 USD</td>
                  <td className="px-4 py-4 text-center">$25 USD</td>
                  <td className="px-4 py-4 text-center">$20 USD</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-4">Destacados por mes</td>
                  <td className="px-4 py-4 text-center">05 días</td>
                  <td className="px-4 py-4 text-center">10 días</td>
                  <td className="px-4 py-4 text-center">15 días</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-4">Prioridad en búsquedas</td>
                  <td className="px-4 py-4 text-center">
                    <X className="w-5 h-5 mx-auto text-gray-300" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <CheckCircle className="w-5 h-5 mx-auto text-green-500" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <CheckCircle className="w-5 h-5 mx-auto text-green-500" />
                  </td>
                </tr>
                
                <tr className="border-b">
                  <td className="px-4 py-4">Soporte</td>
                  <td className="px-4 py-4 text-center">Email</td>
                  <td className="px-4 py-4 text-center">Email + Chat</td>
                  <td className="px-4 py-4 text-center">24/7</td>
                </tr>
                <tr>
                  <td className="px-4 py-4">Gestor de cuenta</td>
                  <td className="px-4 py-4 text-center">
                    <X className="w-5 h-5 mx-auto text-gray-300" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <X className="w-5 h-5 mx-auto text-gray-300" />
                  </td>
                  <td className="px-4 py-4 text-center">
                    <CheckCircle className="w-5 h-5 mx-auto text-green-500" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
)
}