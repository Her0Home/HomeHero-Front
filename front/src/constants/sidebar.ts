import { routes } from "@/routes";
import { linksNav } from "@/types";
import { LucideCircleUserRound } from "lucide-react";


export const sidebarProLinks:linksNav[] = [

  {
    label: "Perfil",
    href: routes.dashboard,
    icon: LucideCircleUserRound
  },
  {
    label: "Chats",
    href: routes.chats,
  },
  {
    label: "Comentarios",
    href: routes.comentarios,
  },
  {
    label: "Citas",
    href: routes.citas,

  },
  
  {
    label: "Editar perfil",
    href: routes.edit_perfil,
  },
  {
    label: "Facturas",
    href: routes.historial_pagos,
  },
  
]

export const sidebarClientLinks:linksNav[] = [
  {
    label: "Perfil",
    href: routes.dashboard,
    icon: LucideCircleUserRound
  },
  {
    label: "Servicios",
    href: routes.servicios,
  },
  {
    label: "Citas",
    href: routes.citas,
  },
  {
    label: "Chats",
    href: routes.chats,
  },
  {
    label: "Editar perfil",
    href: routes.edit_perfil,
  },

]

export const sidebarAdminLinks:linksNav[] = [
  {
    label: "Reportes",
    href: routes.reportes,
  },
  {
    label: "Facturación",
    href: routes.facturacion,
  },
  {
    label: "Chats",
    href: routes.chats,
  },
  {
    label: "Citas Managear",
    href: routes.citas_managear,
  },
  {
    label: "Clientes",
    href: routes.clientes_managear,
  },
  {
    label: "Profesionales",
    href: routes.pro_managear,
  },
]