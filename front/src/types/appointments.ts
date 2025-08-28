import { AppointmentStatus } from ".";

export interface IUserAP {
  id: string
  name: string
}

export interface IAppointment {
  id: string
  startTime: string // ISO string
  endTime: string   // ISO string
  description: string
  status: AppointmentStatus
  imageService: string
  client: IUserAP
  professional: IUserAP
}

export interface IAppointmentCreate {
  date: Date;

  time: string;

  description: string;

  status: AppointmentStatus;

  imageService: string;

  clientId: string;

  professionalId: string;
}