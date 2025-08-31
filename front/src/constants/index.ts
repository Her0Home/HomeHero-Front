import { routes } from "@/routes"
import { ChartNoAxesCombined, ClipboardClock, FileSearch, Hammer, Handshake,  Library, LucideCircleUserRound,  MessageCircle, MessageSquareHeart, ReceiptText, Settings, UserSearch, Star } from "lucide-react"

export const itemsNavs = {
  perfil:  {
    label: "Perfil",
    href: routes.dashboard,
    icon: LucideCircleUserRound
  },
  servicios : {
    label: "Servicios",
    href: routes.servicios,
    icon: Hammer
  },
  citas:{
    label: "Citas",
    href: routes.citas,
    icon: ClipboardClock
  },
  chats:{
    label: "Chats",
    href: routes.chats,
    icon: MessageCircle
  },
  comentarios :  {
    label: "Comentarios",
    href: routes.comentarios,
    icon: MessageSquareHeart
  },
  editarPerfil: {
    label: "Editar perfil",
    href: routes.edit_perfil,
    icon: Settings
  },
  facturas:  {
    label: "Historial de Pagos",
    href: routes.historial_pagos,
    icon:Library
  },
  citasManagear: {
    label: "Citas Manager",
    href: routes.citas_managear,
    icon: FileSearch
  },
  clientsManagear:  {
    label: "Clientes Manager",
    href: routes.clientes_managear,
    icon: UserSearch
  },
  profesionalManagear:  {
    label: "Profesionales Manager",
    href: routes.pro_managear,
    icon: UserSearch
  },
  reportes:  {
    label: "Reportes",
    href: routes.reportes,
    icon: ChartNoAxesCombined
  },
  facturacion:  {
    label: "Facturación",
    href: routes.facturacion,
    icon: ReceiptText
  },
  trabajo:{
    label:"Trabaja Con Nosotros",
    href: routes.infopro,
    icon: Handshake
  },
  membresia:{
    label:"Membresias",
     href: routes.membership_status,
    icon: Star
  }
}

