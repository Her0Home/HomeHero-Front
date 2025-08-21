import { Role } from ".";
import { IAddres } from "./adres";
import { IAppointment } from "./appointments";
import { ICategory } from "./category";
import { IChat } from "./chat";
import { IImage } from "./image";
import { IMembership } from "./membership";
import { ISubCategory } from "./subCategory";

export interface IUser {
  id: string;

  auth0Id?: string;

  name: string;

  email: string;

  birthdate?: Date;

  dni?: number;

  imageProfile?: string;

  description?: string;

  password?: string;

  avaregeRating?: number;

  totalAppointments?: number;

  isVerified: boolean;

  isActive: boolean;

  role: Role;

  clientAppointments: IAppointment[];

  professionalAppointments: IAppointment[];

  membership: IMembership;

  categories: ICategory[];

  subcategories?: ISubCategory[];

  addres: IAddres[]

  image: IImage[];

  clientChats: IChat[];

  profesionalChats: IChat[];
}

export interface IUserResponse {
  id: string;

  name: string;

  isVerified: boolean;

  isActive: boolean;

  role: Role;

}

export interface LoginUserDTO {
  email: string;

  password: string;
}

export interface RegisterUserDTO {
  name: string;

  email: string;

  password: string;
}

