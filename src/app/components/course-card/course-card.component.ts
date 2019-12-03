import { EventEmitter, Component, Input, Output, OnInit } from "@angular/core";

@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.scss"],
})
export class CourseCardComponent implements OnInit {
  @Input() public course: any;
  @Output() public deleteCourse: EventEmitter<number> = new EventEmitter<number>();
  @Output() public editCourse: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  public ngOnInit() {}

  public delete(): void {
    this.deleteCourse.emit(this.course.id);
  }

  public edit(): void {
    this.editCourse.emit(this.course.id);
  }
}
