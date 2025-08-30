import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { IUser } from "@/types/users";
import Image from "next/image";
import { FunctionComponent } from "react";

interface PerfilCardProps {
  user: IUser | undefined;
}

const PerfilCard: FunctionComponent<PerfilCardProps> = ({ user }) => {
  return (
    <div className="w-2/4">
      <Card className="flex flex-col ">
        <CardHeader className="items-center">
          <div>
            <div className="bg-slate-300 w-60 h-60 rounded-full flex justify-center items-center overflow-hidden relative">
              {user?.imageProfile && user.imageProfile.length > 300 ? (
                <Image
                  alt={user?.name ?? " "}
                  src={user.imageProfile}
                  width={58}
                  height={58}
                  className="object-cover rounded-full"
                />
              ) : (
                <p className="text-hero-gray font-Title text-9xl text-center break-words px-2">
                  {user?.name
                    ?.split(" ")
                    .map((word) => word[0])
                    .join("")
                    .toUpperCase()}
                </p>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col text-center font-Text gap-2">
          <p className="text-4xl logo font-Title">{user?.name}</p>
          <p className="text-lg text-gray-400">{user?.email}</p>
        </CardContent>
        <CardFooter className="-mt-5">
          <Card className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-4 border border-gray-200">
              <h2 className="text-lg font-semibold font-Text text-gray-800">
                Cuenta:{" "}
                {user?.isActive 
                  ? <span className="text-green-400">Activa</span>
                  : <span className="text-red-500">Temporalmente Desactivada</span>}
              </h2>
          </Card>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PerfilCard;
