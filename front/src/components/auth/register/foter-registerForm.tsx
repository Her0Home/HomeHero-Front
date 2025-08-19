"use client";
import { Button } from "@/components/ui/button";
import { routes } from "@/routes";
import Link from "next/link";
import { FC } from "react";
import { FcGoogle } from "react-icons/fc";

const FooterRegisterForm: FC = () => {
  
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
      <Button variant="outline" className="w-full bg-hero-black" asChild>
        <Link href={"https://homehero-back.onrender.com/login"}>
          {<FcGoogle className="text-2xl " />}Registrate con Google
        </Link>
      </Button>

      <div className="text-center text-sm">
        Ya tienes un cuenta?{" "}
        <Link href={routes.login} className="underline underline-offset-4">
          Ingresa aca
        </Link>
      </div>
    </div>
  );
};

export default FooterRegisterForm;
