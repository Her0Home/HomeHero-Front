import { typeMemberships } from ".";
import { IUser } from "./users";




export interface IMembership {
  id: number;

  comment: string;

  membershipStart: Date;

  membershipEnd: Date;

  membershipType: typeMemberships;

  user: IUser;
}
