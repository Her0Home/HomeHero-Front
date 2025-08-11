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
    label : "Perfil",
    href: routes.profile,
  }
]

export const navbarProLinks = [

  {
    label : "Trabaja con nosotros",
    href: routes.trabaja_con_nosotros,
  },
  {
    label: "Citas",
    href: routes.servicios,
  },
  {
    label: "Perfil",
    href: routes.profile,
  },
]

export const navbarAdminLinks = [

  {
    label: "Servicios",
    href: routes.servicios,
  },
  {
    label : "Anlaytics",
    href: routes.ganancias,
  },
  {
    label: "Dashboard",
    href: routes.profile,
  },
]