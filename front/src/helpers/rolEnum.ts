import { Role } from "@/types";

export const parseRole = (value?: string): Role => {
  switch (value?.toLowerCase()) {
    case "admin":
      return Role.ADMIN;
    case "cliente":
      return Role.CLIENTE;
    case "profesional":
      return Role.PROFESSIONAL;
    default:
      return Role.unknown;
  }
};