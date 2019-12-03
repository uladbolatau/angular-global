import { ICourse } from "../interfaces/course";

export class Course implements ICourse {
  constructor(public id: number, public title: string, public created: string, public duration: number, public description: string) {}
}
