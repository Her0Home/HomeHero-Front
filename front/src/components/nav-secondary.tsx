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
import { sidebarAdminSub, sidebarProSub } from "@/constants/sidebar";
import Link from "next/link";
import { itemsNavs } from "@/constants";
import cs from "classnames";
import { usePathname } from "next/navigation";

export function NavSecondary({
  role,
  ...props
}: {
  role: Role;
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const roles = role;

  const pathname = usePathname();

  const navLinks = () => {
    switch (roles) {
      case Role.PROFESSIONAL:
        return sidebarProSub;
      case Role.ADMIN:
        return sidebarAdminSub;
      default:
        return itemsNavs.editarPerfil ? [itemsNavs.editarPerfil] : [];
    }
  };
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {navLinks().map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton
                className={cs(
                  "font-Text",
                  pathname === item.href && "outline-hero-purple"
                )}
                tooltip={item.label}
              >
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
