"use client"

import { LucideCircleUserRound } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { Role } from "@/types"
import { sidebarAdminLinks, sidebarClientLinks, sidebarLinks, sidebarProLinks } from "@/constants/sidebar"
import { routes } from "@/routes"

interface NavMainProps {
  role: Role
  user: string
}

export function NavMain({ role, user }: NavMainProps) 

{

  const roles = role

  const navLinks = () => {
    switch (roles) {
      case Role.PROFESSIONAL:
        return sidebarProLinks; 
        case  Role.ADMIN:
        return sidebarAdminLinks;
        case Role.CLIENTE :
        return sidebarClientLinks
      default:
        return sidebarLinks;
    }
  }
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="min-w-8 bg-hero-purple text-white hover:bg-purple-300 font-Title"
              asChild
            >
              <Link href={routes.dashboard}>
              <span className="flex flex-row  gap-1 justify-center items-center text-sm"> <LucideCircleUserRound/> {user}</span>
              </Link>

            </SidebarMenuButton>
          </SidebarMenuItem>

        </SidebarMenu>
        <SidebarMenu className=" gap-2 mt-4 ">
          {navLinks().map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton className="font-Text" tooltip={item.label}>
                <Link
                href={item.href}
                > 
                <div className="flex flex-row items-center gap-2">
                {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                <span> {item.label}</span>
                </div>
                
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
