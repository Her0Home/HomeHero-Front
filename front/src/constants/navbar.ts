import { routes } from "@/routes";


export const navbarLinks = [
  {
    label: "Servicios",
    href: routes.servicios,
  },
  {
    label : "Trabaja con nosotros",
    href: routes.trabaja_con_nosotros,
  }
]

export const navbarClientLinks = [
  
  {
    label: "Servicios",
    href: routes.servicios,
  },
  {
    label : "perfil",
    href: routes.profile,
  }
]

export const navbarProLinks = [

  {
    label : "Trabaja con nosotros",
    href: routes.trabaja_con_nosotros,
  },
  {
    label: "citas",
    href: routes.servicios,
  },
  {
    label: "perfil",
    href: routes.profile,
  },
]

export const navbarAdminLinks = [

  {
    label: "Servicios",
    href: routes.servicios,
  },
  {
    label : "anlaytics",
    href: routes.ganancias,
  },
  {
    label: "dashboard",
    href: routes.profile,
  },
]