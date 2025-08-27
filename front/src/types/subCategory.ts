import { ICategory } from "./category";
import { IUser } from "./users";

export interface ISubCategory {
  id: number;

  name: string;

  image: string;

  category: ICategory;

  professionals?: IUser[];
}

export interface ISubcategorypro {
  id: string
  name: string
  image: string | null
}
