import NameLogo from "@/components/Logo/logo";
import { RegisterForm } from "@/components/register-form";
import { routes } from "@/routes";
import { Link } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface LayoutAuthViewProps {
  children:React.ReactNode; 
}
const LayoutAuthViews: FC<LayoutAuthViewProps> = ({ children }) => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col bg-hero-white gap-4 p-6 md:p-10">
        <div className="flex  gap-2 ">
          <Link href={routes.home} >
            <div className="flex flex-row  gap-2">
            <NameLogo/>
            </div>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            {children}
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src=""
          alt="Image"
          width={1920}
          height={1080}
          fill
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}

export default LayoutAuthViews