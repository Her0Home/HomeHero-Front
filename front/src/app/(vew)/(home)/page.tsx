import React from "react";
import { OurServices } from "./components/nuestrosServicios/ourServicies";
import { HeroSection } from "./components/heroSection/heroSection";
import { HowItWork } from "./components/heroHowItWork/heroHowItWork";
import { SectionProfesional } from "./components/sectionProfesional/sectionProfesional";

// import { NavigationMenuList } from "@/components/ui/navigation-menu";
// import { NavigationMenu, NavigationMenuItem } from "@radix-ui/react-navigation-menu";

  
export default function Home() {
  return (
    <>
    <HeroSection/>
    <OurServices/>
    <HowItWork/>
    <SectionProfesional/>
    </>
  );
}
