"use client";

import * as React from "react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";
import NameLogo from "./Logo/logo";
import { routes } from "@/routes";
import { roleGlobal } from "@/helpers/estatus";
import { useAuth } from "@/context/authcontext";
import Swal from "sweetalert2";
import { NavSecondary } from "./nav-secondary";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, resetuserData } = useAuth();

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

  // This component is used to render the sidebar in the application.
  const name = user?.name;
  const typeUser = roleGlobal;
  // This should be dynamically set based on the logged-in user
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <Link
          className="border border-hero-white hover:border-hero-purple"
          href={routes.home}
        >
          <NameLogo className2="text-2xl" />
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <NavMain role={typeUser} user={name ? name : " "} />
      </SidebarContent>

      <SidebarFooter>
        <NavSecondary role={typeUser} />
        <NavUser handleOnClick={logout} user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
