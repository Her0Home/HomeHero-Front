import { Card, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getAgeFromBirthdate } from "@/helpers/edad";
import { IUser } from "@/types/users";
import { FunctionComponent } from "react";

interface InfoGenProps {
  user: IUser | undefined;
}

const InfoGen: FunctionComponent<InfoGenProps> = ({ user }) => {
  return (
    <div className="w-2/4 ">
      <Card className="h-full">
        <CardHeader className="flex flex-col gap-3 ">
          <p className="text-2xl font-Title text-hero-orange">
            Información General
          </p>

          <div className="flex flex-col gap-2 font-Text ">
            <div className="flex flex-row gap-14">
              <p className="font-Title">Name:</p>
              <p> {user?.name} </p>
            </div>
            <Separator orientation="horizontal" className="bg-gray-300" />

            <div className="flex flex-row gap-14">
              <p className="font-Title">Correo:</p>
              <p> {user?.email} </p>
            </div>
            <Separator orientation="horizontal" className="bg-gray-300" />

            <div className="flex flex-row gap-14">
              <p className="font-Title">Identificacíon:</p>
              <p className="font-Text">{user?.dni}</p>
            </div>
            <Separator orientation="horizontal" className="bg-gray-300" />
            <div className="flex flex-row gap-14">
              <p className="font-Title">Direccíon:</p>
              <p></p>
            </div>
            <Separator orientation="horizontal" className="bg-gray-300" />

            <div className="flex flex-row gap-14">
              <p className="font-Title">Edad:{" "}</p>
              <p>
                {user?.birthdate
                  ? `${getAgeFromBirthdate(user.birthdate)} años`
                  : "No disponible"}{" "}
              
              </p>
            </div>
            <Separator orientation="horizontal" className="bg-gray-300" />
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};

export default InfoGen;
