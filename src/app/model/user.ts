import { IUser } from '../interfaces/user';

export class User implements IUser {
  id: number;
  firstName: string;
  lastName: string;
}
