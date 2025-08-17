import { ICategory } from "./category";
import { IUser } from "./users";

export interface ISubCategory {
  id: number;

  name: string;

  image: string;

  category: ICategory;

  professionals?: IUser[];
}