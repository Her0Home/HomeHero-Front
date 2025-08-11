"use client"

import { MailIcon, PlusCircleIcon, type LucideIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { navbarAdminLinks } from "@/constants/navbar"
import Link from "next/link"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="min-w-8 bg-hero-purple text-white hover:bg-purple-300 font-Title"
            >
              <span>Name</span>
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
          {navbarAdminLinks.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton className="font-Text" tooltip={item.label}>
                <Link
                href={item.href}
                >
                <span>{item.label}</span>
                
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
