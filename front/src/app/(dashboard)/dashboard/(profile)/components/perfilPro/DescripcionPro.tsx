import { Card, CardHeader } from "@/components/ui/card";
import { FunctionComponent } from "react";


interface DescripcionProProps {
  descripcion : string | undefined
}
 
const DescripcionPro: FunctionComponent<DescripcionProProps> = (
  {descripcion}
) => {
  return ( <div>
    <div>
      <Card>
        <CardHeader>
          <p className="text-2xl font-Title">Descripcion  de el profesional</p>
          <div>
            <p>categoria</p>
            <p>Sub categorias</p>
          </div>
          <div>
            <p>{descripcion}</p>
          </div>
        </CardHeader>
      </Card>
    </div>
  </div> );
}
 
export default DescripcionPro;