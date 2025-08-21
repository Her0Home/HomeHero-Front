"use client";

import * as React from "react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Role } from "@/types";
import {
  sidebarAdminLinks2,
  sidebarClientLinks2,
  sidebarLinks,

  sidebarProLinks2,
} from "@/constants/sidebar";
import Link from "next/link";

export function NavSecondary({
  role,
  ...props
}: {
  role: Role;
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  
  const roles = role;

  const navLinks = () => {
    switch (roles) {
      case Role.PROFESSIONAL:
        return sidebarProLinks2;
      case Role.ADMIN:
        return sidebarAdminLinks2;
      case Role.CLIENTE:
        return sidebarClientLinks2;
      default:
        return sidebarLinks;
    }
  };
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {navLinks().map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton className="font-Text" tooltip={item.label}>
                <Link href={item.href}>
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
  );
}
