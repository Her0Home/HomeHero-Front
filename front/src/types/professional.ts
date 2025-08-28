import {  ICategoryPro } from "./category";
import { ISubcategorypro } from "./subCategory";

export interface IProfessionalRating {
  id: string;
  
  name: string;

  imageProfile: string;

  description: string;

  averageRating: string;
  
  category: ICategoryPro;

  totalAppointments: number;

  isVerified: boolean;

  isMembresyActive: boolean;
}

export interface IProfessionalSearch {
  id: string;
  
  name: string;

  city: string;

  imageProfile: string;

  description: string;

 averageRating: string;

  totalAppointments: number;

  isVerified: boolean;

  isMembresyActive: boolean;

  category: ICategoryPro;

  subcategories: ISubcategorypro[];


}
export interface IComment {
  id: string
  rating: number
  comment: string
  createdAt: string
  clientName?: string
}

export interface UpdateUserPayload {
  dni?: string
  categoriesId: string
  birthdate: string // formato ISO
  city: string
  aptoNumber: string
  streetNumber: number
  imageProfile: string
  subcategories: string[]
}
export interface UpdateclientPayload {
  dni?: string
  birthdate: string // formato ISO
  city: string
  aptoNumber: string
  streetNumber: number
  imageProfile: string
}
