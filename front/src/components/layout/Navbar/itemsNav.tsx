"use client";

import { FC } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/layout/Navbar/navigation-menu";
import { Button } from "../../ui/button";
import { navbarLinks } from "@/constants/navbar";
import { routes } from "@/routes";
import {  IUserResponse } from "@/types/users";
type Props = {
  handleOnClick: () => void;
  isAuthenticated: boolean | null;
  Links: () => { label: string; href: string }[];
  User: IUserResponse | null;
};

const ItemsNav: FC<Props> = ({
  handleOnClick,
  isAuthenticated,
  Links,
  User,
}) => {

  console.log("este es el user",User);
  
  if (!isAuthenticated) {
    return (
      <NavigationMenu>
        <NavigationMenuList className="gap-8">
          {navbarLinks.map((item) => (
            <Button
              key={item.label}
              variant="link"
              className="font-Title"
              asChild
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          <Button
            key={"Login"}
            variant="primary"
            className="font-Title"
            asChild
          >
            <Link href={routes.login}>Iniciar Sesion</Link>
          </Button>
          <Button
            key={"Register"}
            variant="secundary"
            className="font-Title"
            asChild
          >
            <Link href={routes.register}>registrarse</Link>
          </Button>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-10">
        {Links().map((items) => (
          <Button
            key={items.label}
            variant={"link"}
            className="font-Title "
            asChild
          >
            <Link href={items.href}>
              {items.label === "Perfil" && User?.name
                ? `${User.name}`
                : items.label}
            </Link>
          </Button>
        ))}

        <Button
          key={"Logout"}
          variant="outlineGradient"
          className="font-Title"
          onClick={handleOnClick}
        >
          Cerrar Sesión
        </Button>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ItemsNav;
