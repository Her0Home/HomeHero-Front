import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export const CardAppoiment = () => {
  return (
    <div>
      <Card className="flex flex-row items-center justify-between gap-2
      p-2 rounded-xl shadow-md bg-white text-gray-800 w-full max-w-4xl mx-auto">
        {/* Header */}
        <CardHeader className="flex flex-col items-start justify-center gap-2 min-w-[150px]">
          <h2 className="text-lg font-semibold">Estatus</h2>
          <p className="text-sm text-gray-600">Cliente</p>
          <p className="text-sm text-gray-600">Profesional</p>
        </CardHeader>

        {/* Content */}
        <CardContent className=" gap-4 text-sm flex-1">
         
          <div className="space-y-1 text-gray-600">
            <p>Fecha</p>
            <p>Dieracion</p>
            <p>Servicios</p>
          </div>
        </CardContent>

        {/* Footer */}
        <CardFooter className="flex flex-col gap-2 items-center justify-center min-w-[120px]">
          <Button variant="outline" className="px-4 py-2 text-sm font-medium">
            Ver más
          </Button>

          <Button variant="outlineGradient" className="spx-4 py-2 text-sm font-medium">
            Aceptar
          </Button>
          <Button variant="destructive" className="px-2 py-1 text-sm font-medium">
            Rechazar
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
