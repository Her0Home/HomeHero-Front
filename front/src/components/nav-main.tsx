"use client";

import { LucideCircleUserRound } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Role } from "@/types";
import {
  sidebarAdminMain,
  sidebarClientMain,
  sidebarLinks,
  sidebarProMain,
} from "@/constants/sidebar";
import { routes } from "@/routes";
import { usePathname } from "next/navigation";
import cs from "classnames";

interface NavMainProps {
  role: Role;
  user: string;
}

export function NavMain({ role, user }: NavMainProps) {
  const roles = role;

  const pathname = usePathname();

  const navLinks = () => {
    switch (roles) {
      case Role.PROFESSIONAL:
        return sidebarProMain;
      case Role.ADMIN:
        return sidebarAdminMain;
      case Role.CLIENTE:
        return sidebarClientMain;
      default:
        return sidebarLinks;
    }
  };
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className={cs(
                "bg-gray-300 text-hero-black font-Title",
                pathname === routes.dashboard &&
                  "min-w-8 bg-hero-purple text-white hover:bg-hero-purple"
              )}
              asChild
            >
              {role === Role.ADMIN ? (
                <span className="flex flex-row gap-1 justify-center items-center text-sm">
                  <LucideCircleUserRound />
                  {user}
                </span>
              ) : (
                <Link href={routes.dashboard}>
                  <span className="flex flex-row gap-1 justify-center items-center text-sm">
                    <LucideCircleUserRound />
                    {user}
                  </span>
                </Link>
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu className=" gap-2 mt-4 ">
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
