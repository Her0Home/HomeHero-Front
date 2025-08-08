"use client"

import * as React from "react"
// import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/layout/Navbar/navigation-menu"
import { Button } from "../../ui/button"


const items = [
  {
    title: "Home",
    href: "/",
    description: "Welcome to our homepage",
  },
  {
    title: "Servicios",
    href: "/about",
    description: "Learn more about us",
  },
  {
    title: "Login",
    href: "/services",
    description: "Discover our services",
  },
  {
    title: "Register",
    href: "/contact",
    description: "Get in touch with us",
  },
]

export function NavMenu() {
  return (
    <NavigationMenu  >
      <NavigationMenuList className="gap-10">
        {items.map(items => (
          <Button 
            key={items.title}
            variant={"link"}
            className="font-Title "
            >
              {items.title} 
          </Button>
        ))}
        
      
      </NavigationMenuList>
    </NavigationMenu>
  )
}

