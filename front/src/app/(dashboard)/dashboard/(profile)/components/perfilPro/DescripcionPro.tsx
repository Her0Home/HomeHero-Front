import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { pl } from "date-fns/locale";
import { FunctionComponent } from "react";

const plumbingSubcategories = [
  "Reparación de fugas",
  "Instalación de grifos y llaves",
  "Desagües y drenajes",
  "Instalación de sanitarios",
  "Reparación de tuberías",
  "Mantenimiento de calentadores",
];

interface DescripcionProProps {
  descripcion: string | undefined;
}

const DescripcionPro: FunctionComponent<DescripcionProProps> = ({
  descripcion,
}) => {
  return (
    <div>
      <div>
        <Card>
          <CardHeader>
            <p className="text-2xl font-Title">Descripcion de el profesional</p>
          </CardHeader>
          <CardContent>
          <div className="flex flex-col gap-2">
              <Card className="w-fit p-2 bg-gray-200 text-gray-500">
                <p >categoria</p>
              </Card>
              <div className="grid grid-cols-3 gap-2">
                {plumbingSubcategories.map((item, index) => (
                  <Card
                    key={index}
                    className="w-fit p-2 bg-gray-300 text-gray-500"
                  >
                    <p className="text-xs" >{item}</p>
                  </Card>
                ))}
              </div>
            </div>
            <div className="p-3 font-Text">
              <p className="text-lg font-semibold">Descripcion:</p>
              <p>{descripcion}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DescripcionPro;
