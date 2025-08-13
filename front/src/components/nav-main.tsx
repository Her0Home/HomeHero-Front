"use client"

import { MailIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { Role } from "@/types"
import { sidebarAdminLinks, sidebarClientLinks, sidebarProLinks } from "@/constants/sidebar"

interface NavMainProps {
  role: Role
  user: string
}

export function NavMain({ role, user }: NavMainProps) 

{

  const roles = role

  const navLinks = () => {
    switch (roles) {
      case "pro":
        return sidebarProLinks; 
        case "admin":
        return sidebarAdminLinks;
      default:
        return sidebarClientLinks; // Assuming client has similar links as admin // Default to admin links if role is unknown
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
            >
              <span>{user}</span>
            </SidebarMenuButton>
            <Button
              size="icon"
              className="h-9 w-9 shrink-0 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
            >
              <MailIcon />
              <span className="sr-only">Inbox</span>
            </Button>
          </SidebarMenuItem>

        </SidebarMenu>
        <SidebarMenu>
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
