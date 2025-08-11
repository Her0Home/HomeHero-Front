"use client"

import { FC} from "react"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/layout/Navbar/navigation-menu"
import { Button } from "../../ui/button"
import {  navbarLinks, } from "@/constants/navbar"
import { routes } from "@/routes"
type Props = {
  handleOnClick: () => void
  isAuthenticated: boolean
  Links: () => { label: string; href: string }[]
}

const ItemsNav:FC<Props>  = ({handleOnClick,isAuthenticated, Links}) => {
  if(!isAuthenticated){
  return ( 
    <NavigationMenu>
    <NavigationMenuList className="gap-8">
      {navbarLinks.map((item) => (
        <Button
          key={item.label}
          variant="link"
          className="font-Title"
          asChild
        >
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}
      <Button
          key={"Login"}
          variant="primary"
          className="font-Title"
          asChild
        >
          <Link href={routes.login}>Iniciar Sesion</Link>
      </Button>
      <Button
          key={"Register"}
          variant="secundary"
          className="font-Title"
          asChild
        >
          <Link href={routes.register}>registrarse</Link>
      </Button>
      
    </NavigationMenuList>
  </NavigationMenu>
  )};
  return (
    <NavigationMenu  >
      <NavigationMenuList className="gap-10">
        {Links().map(items => (
          <Button 
            key={items.label}
            variant={"link"}
            className="font-Title "
            asChild
            >
              <Link
              href={items.href}
              >
              {items.label} 
              </Link>
          </Button>
        ))}
        
        <Button
          key={"Logout"}
          variant="outlineGradient"
          className="font-Title"
          onClick={handleOnClick}
          >
            LogAuth
          </Button>
      </NavigationMenuList>
    </NavigationMenu>
  )




}

export default ItemsNav;