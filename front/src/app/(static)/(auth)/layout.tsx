import NameLogo from "@/components/Logo/logo";
import { Card, CardContent } from "@/components/ui/card";
import { routes } from "@/routes";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface LayoutAuthViewProps {
  children:React.ReactNode; 
}
const LayoutAuthViews: FC<LayoutAuthViewProps> = ({ children }) => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col  bg-gradient-to-br from-hero-cream via-hero-gray to-hero-white gap-4 p-6 md:p-10">
        <div className="flex  gap-2 ">
          <Link href={routes.home} >
            <NameLogo/>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          
            <Card className="w-2/3">
              <CardContent className="flex flex-col  p-6 ">
                {children}
              </CardContent>
            </Card>
          
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="https://ik.imagekit.io/ankxi835d/Home%20Hero/limpieza.jpg"
          alt="Image"
          fill
          className="absolute inset-0  w-full object-cover"
        />
      </div>
    </div>
  )
}

export default LayoutAuthViews