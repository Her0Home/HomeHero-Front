"use client";
import { Button } from "@/components/ui/button";
import { routes } from "@/routes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { FcGoogle } from "react-icons/fc";

const FooterLogInForm: FC = () => {
  
  const router = useRouter()
  const handleGoogleLogin = () => {
    router.push(`${process.env.NEXT_PUBLIC_API_URL}/login`);
  };
  console.log(`${process.env.NEXT_PUBLIC_API_URL}/login`);
  
  return (
    <div className="flex flex-col gap-2 mt-4">
      <div
        className="relative p-2 text-sm text-center after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border"
      >
        <span className="relative z-10 px-2 bg-background text-muted-foreground">
          O continua con
        </span>
      </div>
      <Button variant="outline" type="button" onClick={handleGoogleLogin} className="w-full bg-hero-black" >
          {<FcGoogle className="text-2xl " />}Iniciar sesión con Google
      </Button>

      <div className="text-sm text-center">
        No tienes un cuenta?{" "}
        <Link href={routes.register} className="underline underline-offset-4">
          Registrate Aquí
        </Link>
      </div>
    </div>
  );
};

export default FooterLogInForm;
