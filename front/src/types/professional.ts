import {  ICategoryPro } from "./category";
import { ISubcategorypro } from "./subCategory";

export interface IProfessionalRating {
  id: string;
  
  name: string;

  imageProfile: string;

  description: string;

  avaregeRating: string;
  
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

avaregeRating: string;

  totalAppointments: number;

  isVerified: boolean;

  isMembresyActive: boolean;

  category: ICategoryPro;

  subcategories: ISubcategorypro[];


}