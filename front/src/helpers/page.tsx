import { IUser } from "@/types/users";

export interface LogInResponse {
  login: boolean;
   user: IUser;
   token: string;
}

export interface LogInServiceResponse {
   message: string;
   data?:LogInResponse;
}