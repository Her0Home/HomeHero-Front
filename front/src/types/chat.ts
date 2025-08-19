import { IAppointment } from "./appointments";
import { IMessage } from "./messages";
import { IUser } from "./users";

export interface IChat {
  id: string;

  lastMessageContent?: string;

  lastMessageAt?: Date;

  appointment?: IAppointment;

  cliente: IUser;

  profesional: IUser;

  messages: IMessage[];

}