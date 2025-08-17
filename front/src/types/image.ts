import { IAppointment } from "./appointments";
import { IUser } from "./users";


export interface IImage {
    id: number;

    image: string;

    user: IUser;

    appointment: IAppointment;
}
