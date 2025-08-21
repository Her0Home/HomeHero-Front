"use client";
import { Button } from "@/components/ui/button";
import { routes } from "@/routes";
import Link from "next/link";
import { FC } from "react";
import { FcGoogle } from "react-icons/fc";

const FooterRegisterForm: FC = () => {
  
    const handleGoogleLogin = () => {
      window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/login`;
    };
  return (
    <div className="flex flex-col gap-2 mt-4">
      <div
        className="relative text-center text-sm p-2 
          after:absolute after:inset-0 after:top-1/2 
          after:z-0 after:flex after:items-center after:border-t 
          after:border-border"
      >
        <span className="relative z-10 bg-background px-2 text-muted-foreground">
          O continua con
        </span>
      </div>
      <Button variant="outline" type="button" onClick={handleGoogleLogin} className="w-full bg-hero-black" >
          {<FcGoogle className="text-2xl " />}Registrate con Google
      </Button>

      <div className="text-center text-sm">
        Ya tienes un cuenta?{" "}
        <Link href={routes.login} className="underline underline-offset-4">
          Ingresa Aquí
        </Link>
      </div>
    </div>
  );
};

export default FooterRegisterForm;
