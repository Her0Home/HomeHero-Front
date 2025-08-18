"use client";

import { FC } from "react";
import ItemsNav from "./itemsNav";
import { routes } from "@/routes";
import Swal from "sweetalert2";
import {
  navbarClientLinks,
  navbarLinks,
  navbarProLinks,
} from "@/constants/navbar";
import { isAuthenticatedGlobal, roleGlobal } from "@/helpers/estatus";
import { useAuth } from "@/context/authcontext";

type Role =  "pro" | "client";

export const NavMenu: FC = () => {
  
  const {isAuth, resetuserData } = useAuth(); // Esto en real vendría de un estado global o auth
  const logout = () => {
    resetuserData();
    // Implement logout logic here
    location.assign(routes.home); // Redirigir al usuario a la página de inicio después de cerrar sesión

    Swal.fire({
      title: "Sesión cerrada correctamente",
      icon: "success",
      confirmButtonText: "Aceptar",
      position: "top-end",
      timer: 1500,
      timerProgressBar: true,
    });
  };

  const roles = roleGlobal as Role; // Esto en real vendría de un estado global o auth
  
  const links = () => {
    switch (roles) {
      case "pro":
        return navbarProLinks;
      case "client":
        return navbarClientLinks;
      default:
        return navbarLinks;
    }
  };

  return (
    <ItemsNav handleOnClick={logout} isAuthenticated={isAuth} Links={links} />
  );
};
