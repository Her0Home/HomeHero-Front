import { LucideIcon } from "lucide-react";
import { IUserResponse } from "./users";

export enum Role {
  ADMIN = "admin",
  CLIENTE = "cliente",
  PROFESSIONAL = "profesional",
  unknown = "desconocido",
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
  user: IUserResponse 
}

export interface LogInServiceResponse {
  message: string;
  data?: LogInResponse;
  errors?: any;
}
