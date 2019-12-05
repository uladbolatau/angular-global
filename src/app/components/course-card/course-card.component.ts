import {
  EventEmitter,
  Component,
  Input,
  Output,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from "@angular/core";

@Component({
  selector: "app-course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.scss"],
})
export class CourseCardComponent
  implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() public course: any;
  @Output() public deleteCourse: EventEmitter<number> = new EventEmitter<number>();
  @Output() public editCourse: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  public ngOnChanges(): void {
    console.log(`ngOnChanges id: ${this.course.id}`);
    console.dir(this.course);
  }

  public ngOnInit(): void {
    console.log(`ngOnInit id: ${this.course.id}`);
    console.dir(this.course);
  }

  public ngAfterContentInit(): void {
    console.log(`ngAfterContentInit id: ${this.course.id}`);
    console.dir(this.course);
  }

  public ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked id: ${this.course.id}`);
    console.dir(this.course);
  }

  public ngAfterViewInit(): void {
    console.log(`ngAfterViewInit id: ${this.course.id}`);
    console.dir(this.course);
  }

  public ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked id: ${this.course.id}`);
    console.dir(this.course);
  }

  /* tslint:disable */
  public ngDoCheck(): void {
    console.log(`ngDoCheck id: ${this.course.id}`);
    console.dir(this.course);
  }

  public ngOnDestroy(): void {
    console.log(`ngOnDestroy id: ${this.course.id}`);
    console.dir(this.course);
  }
  /* tslint:enable */

  public delete(): void {
    this.deleteCourse.emit(this.course.id);
  }

  public edit(): void {
    this.editCourse.emit(this.course.id);
  }
}
