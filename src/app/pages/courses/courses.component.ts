import { Component, OnInit } from '@angular/core';
import { ICourse } from '../../interfaces/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  private coursesList: ICourse[] = [
    {
     id: 1,
     title: 'Introduction to Angular Elements',
     created: new Date('2019-12-01').toLocaleDateString(),
     duration: 90,
     description: 'This training provides information about Angular Elements. It is a new feature of Angular since v6.',
    },
    {
      id: 2,
      title: 'Modern JavaScript: Iterators',
      created: new Date('2020-01-05').toLocaleDateString(),
      duration: 160,
      description: 'This training introduces new features of ES2015 and ES2018: Iterable and Iterator protocol, async iterations.',
    },
    {
      id: 3,
      title: 'Scrum for Beginners',
      created: new Date('2020-02-29').toLocaleDateString(),
      duration: 360,
      description: 'This training is a Scrum simulation, where participants create a product in groups and learn Scrum in a practical way. Along the way, we discuss core Scrum rules and how they help overcome typical challenges.',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  public onCopyLink(id: number): void {
    console.log(`Copy link: ${id}`);
  }

  public onDelete(id: number): void {
    console.log(`Delete: ${id}`);
  }

  public onEdit(id: number): void {
    console.log(`Edit: ${id}`);
  }

  private loadMore(): void {
    console.log('Load more courses');
  }

  private addNewCourse(): void {
    console.log('Add new course');
  }

}
