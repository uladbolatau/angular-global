import { ICourse } from '../interfaces/course';

export class Course implements ICourse {
   id: number;
   title: string;
   created: string;
   duration: number;
   description: string;
}
