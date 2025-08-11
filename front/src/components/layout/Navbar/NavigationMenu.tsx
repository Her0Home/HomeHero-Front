"use client";

import { FC } from "react";
import ItemsNav from "./itemsNav";
import { routes } from "@/routes";
import Swal from "sweetalert2";
import {
  navbarAdminLinks,
  navbarClientLinks,
  navbarLinks,
  navbarProLinks,
} from "@/constants/navbar";

type Role = "admin" | "pro" | "client";

export const NavMenu: FC = () => {
  const logout = () => {
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

  const isAuth = true; // Esto en real vendría de un estado global o auth
  const roles = "client" as Role; // Esto en real vendría de un estado global o auth
  const links = () => {
    switch (roles) {
      case "admin":
        return navbarAdminLinks;
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
