import { IUser } from "../interfaces/user";

export class User implements IUser {
  constructor(public id: number, public firstName: string, public lastName: string) {}
}
