import { Chat } from "./chat";
import { IUser } from "./users";



export interface IMessage {
  id: string;
  
  content: string;
  
  sentAt: Date;
  
  isRead: boolean;
  
  chat: Chat;
  
  sender: IUser;
  }
