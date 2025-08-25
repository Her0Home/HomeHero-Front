import { Card, CardHeader } from "@/components/ui/card";
import { FC } from "react";

interface CitasProProps {
  idUser: string | undefined
}
 
const LateralPro: FC<CitasProProps>= ({idUser}:CitasProProps) => {


  return ( 

    <div className="w-1/3 flex flex-col gap-2">
        <div>
            <Card>
              <CardHeader>
                <p className="text-2xl font-Title">Citas Pendientes</p>
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
                <p className="text-2xl font-Title">Citas cumplidas</p>
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
 
export default LateralPro;