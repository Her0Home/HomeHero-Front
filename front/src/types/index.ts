import { LucideIcon } from "lucide-react";

export enum Role {
  ADMIN = "admin",
  CLIENTE = "cliente",
  PROFESSIONAL = "profesional",
  NOTVERIFY = "no verificado",
}

export enum AppointmentStatus {
  PENDING = "pending",
  CONFIRMED = "confirmed",
  IN_PROGRESS = "in_progress",
  CANCELED = "canceled",
  COMPLETED = "completed",
}

export enum typeMemberships {
  FREE = "free",
  PREMIUM = "premium",
}

export interface linksNav {
  label: string;
  href: string;
  icon?: LucideIcon;
}

export interface LogInResponse {
  token: string;
}

export interface LogInServiceResponse {
  message: string;
  data?: LogInResponse;
  errors?: any;
}
