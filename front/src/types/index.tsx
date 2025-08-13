import { LucideIcon } from "lucide-react";






export type Role = "admin" | "pro" | "client";

export interface linksNav {
  label: string;
  href: string;
  icon?: LucideIcon
}