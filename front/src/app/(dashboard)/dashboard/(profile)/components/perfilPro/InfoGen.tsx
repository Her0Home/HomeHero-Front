import { Card, CardHeader } from "@/components/ui/card";
import { IUser } from "@/types/users";
import { Separator } from "@radix-ui/react-separator";
import { FunctionComponent } from "react";

interface InfoGenProps {
  user:IUser | undefined
}
 
const InfoGen: FunctionComponent<InfoGenProps> = (
  {user}
) => {
  return ( <div className="w-2/4 ">
    <Card className="h-full">
      <CardHeader className="flex flex-col gap-3 ">
        <p className="text-2xl font-Title">Información General</p>

        <div className="flex flex-col gap-2 font-Text ">
          <div className="flex flex-row gap-14">
            <p className="font-semibold">Name:</p>
            <p> </p>
          </div>
          <Separator orientation="horizontal" className="bg-gray-300" />

          <div className="flex flex-row gap-14">
            <p className="font-semibold">Correo:</p>
            <p> </p>
          </div>
          <Separator orientation="horizontal" className="bg-gray-300" />

          <div className="flex flex-row gap-14">
            <p className="font-semibold">Identificacíon:</p>
            <p>{user?.dni}</p>
          </div>
          <Separator orientation="horizontal" className="bg-gray-300" />
          <div className="flex flex-row gap-14">
            <p className="font-semibold">Direccíon:</p>
            <p></p>
          </div>
          <Separator orientation="horizontal" className="bg-gray-300" />

          <div className="flex flex-row gap-14">
            <p className="font-semibold">Edad:</p>
            <p> </p>
          </div>
          <Separator orientation="horizontal" className="bg-gray-300" />
        </div>
      </CardHeader>
    </Card>
  </div> );
}
 
export default InfoGen;