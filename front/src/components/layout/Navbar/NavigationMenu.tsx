"use client";

import { FC } from "react";
import ItemsNav from "./itemsNav";
import { routes } from "@/routes";
import Swal from "sweetalert2";
import {
  navbarClient,
  navbarPro,
  navbarAdmin,
  navbarUnknown,
} from "@/constants/navbar";
import {  roleGlobal } from "@/helpers/estatus";
import { useAuth } from "@/context/authcontext";
import { Role } from "@/types";


export const NavMenu: FC = () => {
  
  const {isAuth, resetuserData, user } = useAuth();
   // Esto en real vendría de un estado global o auth
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

  const roles = roleGlobal ; // Esto en real vendría de un estado global o auth
  
  const links = () => {
    switch (roles) {
      case Role.PROFESSIONAL:
        return navbarPro;
      case Role.CLIENTE:
        return navbarClient;
      case Role.ADMIN:
        return navbarAdmin;
      default:
        return navbarUnknown;
    }
  };
  console.log("return de auth user", user);
  
  return (
    <ItemsNav handleOnClick={logout} User={user} isAuthenticated={isAuth} Links={links} />
  );
};
