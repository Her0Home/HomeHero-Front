import { LucideIcon } from "lucide-react";
import { IUser, IUserResponse } from "./users";

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

export interface linkNav {
  label: string;
  href: string;
  icon?: LucideIcon;
} 

export interface itemsNavs {
  key :linkNav
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

export interface UserIdResponse {
  message: string;
  data?: IUser;
  errors?: any;
}

export type Params<T> = Promise<T>;
export type SearchParams<T> = Promise<T>;