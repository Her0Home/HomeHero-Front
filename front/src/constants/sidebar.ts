import { routes } from "@/routes";
import { linksNav } from "@/types";
import { Hammer, Library, LucideCircleUserRound, MailIcon, MessageCircle, Settings } from "lucide-react";


export const sidebarProLinks:linksNav[] = [

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

  
]

export const sidebarProLinks2:linksNav[] = [
  
  {
    label: "Editar perfil",
    href: routes.edit_perfil,
    icon: Settings
  },
  {
    label: "Facturas",
    href: routes.historial_pagos,
    icon:Library
  },
  
]

export const sidebarLinks:linksNav[] = [
  
  {
    label: "Perfil",
    href: routes.dashboard,
    icon: LucideCircleUserRound
  },

]

export const sidebarClientLinks:linksNav[] = [

  {
    label: "Servicios",
    href: routes.servicios,
    icon: Hammer
  },
  {
    label: "Citas",
    href: routes.citas,
    icon: MailIcon
  },
  {
    label: "Chats",
    href: routes.chats,
    icon: MessageCircle
  },


]
export const sidebarClientLinks2:linksNav[] = [

  {
    label: "Editar perfil",
    href: routes.edit_perfil,
    icon: Settings
  },

]

export const sidebarAdminLinks:linksNav[] = [

  {
    label: "Chats",
    href: routes.chats,
  },
  {
    label: "Citas Managear",
    href: routes.citas_managear,
  },
  {
    label: "Clientes Managear",
    href: routes.clientes_managear,
  },
  {
    label: "Profesionales Managear",
    href: routes.pro_managear,
  },
]


export const sidebarAdminLinks2:linksNav[] = [
  {
    label: "Reportes",
    href: routes.reportes,
  },
  {
    label: "Facturación",
    href: routes.facturacion,
  },
]