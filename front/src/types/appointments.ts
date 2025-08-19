import { AppointmentStatus } from ".";
import { IChat } from "./chat";
import { IImage } from "./image";
import { IUser } from "./users";

export interface IAppointment {
  id: string;


  date: Date;


  time: string;

  description: string;

  token: number;

  status: AppointmentStatus;


  imageService: string;

  client: IUser;

  professional: IUser;

  chat: IChat;

  image: IImage[];
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