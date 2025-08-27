import { linkNav } from "@/types";
import { itemsNavs } from ".";


export const sidebarProMain:linkNav[] = [
  itemsNavs.chats,
  itemsNavs.comentarios,
  itemsNavs.citas,  
  itemsNavs.trabajo
]

export const sidebarProSub:linkNav[] = [
  itemsNavs.membresia,
  itemsNavs.editarPerfil,
  itemsNavs.facturas 
]

export const sidebarClientMain:linkNav[] = [
  itemsNavs.servicios,
  itemsNavs.citas,
  itemsNavs.chats
]

export const sidebarLinks:linkNav[] = [
  itemsNavs.servicios,
  itemsNavs.trabajo
]

export const sidebarAdminMain:linkNav[] = [
  itemsNavs.chats,
  itemsNavs.citasManagear,
  itemsNavs.clientsManagear,
  itemsNavs.profesionalManagear
]


export const sidebarAdminSub:linkNav[] = [
  itemsNavs.reportes,
  itemsNavs.facturacion
]