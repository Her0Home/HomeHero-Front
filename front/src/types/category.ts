import { ISubCategory, ISubcategorypro } from "./subCategory";
import { IUser } from "./users";

export interface ICategory {
  id: number;

  name: string;

  subCategoryArray: string[];

  users_id: number;

  subcategories: ISubCategory[];

  professional: IUser[];
}


export interface ICategoryPro {
  id: string
  name: string
  subcategories: ISubcategorypro[]
}
