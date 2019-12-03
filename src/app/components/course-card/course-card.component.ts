import { EventEmitter, Component, Input, Output, OnInit, OnChanges } from "@angular/core";

@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.scss"],
})
export class CourseCardComponent implements OnInit, OnChanges {
  @Input() public course: any;
  @Output() public deleteCourse: EventEmitter<number> = new EventEmitter<number>();
  @Output() public editCourse: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  public ngOnInit() {
    console.log(`ngOnInit id: ${this.course.id}`);
    console.dir(this.course);
  }

  public ngOnChanges() {
    console.log(`ngOnChanges id: ${this.course.id}`);
    console.dir(this.course);
  }

  public delete(): void {
    this.deleteCourse.emit(this.course.id);
  }

  public edit(): void {
    this.editCourse.emit(this.course.id);
  }
}
