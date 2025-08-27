import { Card, CardHeader } from "@/components/ui/card";
import { FC } from "react";

interface LateralClienteProps {
  idUser: string | undefined
}
 
const LateralCliente: FC<LateralClienteProps>= ({idUser}:LateralClienteProps) => {


  return ( 

    <div className="w-1/3 flex flex-col gap-2">
        <div>
            <Card>
              <CardHeader>
                <p className="text-2xl font-Title">Solicitudes</p>
                <div>
                  <p>Img</p>
                  <p>Nombre</p>
                </div>
              </CardHeader>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <p className="text-2xl font-Title">Servicios Finalizados</p>
                <div>
                  <p>Img</p>
                  <p>Nombre</p>
                </div>
              </CardHeader>
            </Card>
          </div>

        
        </div>
   );
}
 
export default LateralCliente;