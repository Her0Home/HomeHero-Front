import { AppointmentStatus, Role } from "@/types";

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

export const parseAppointments = (value?: string): AppointmentStatus => {
  switch (value?.toLowerCase()) {
    case "pending":
      return AppointmentStatus.PENDING;
    case "confirmed":
      return AppointmentStatus.COMPLETED;
    case "in_progress":
      return AppointmentStatus.IN_PROGRESS;
      case "completed":
        return AppointmentStatus.COMPLETED;
    default:
      return AppointmentStatus.CANCELED;
  }
};


