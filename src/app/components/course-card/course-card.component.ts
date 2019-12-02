import { EventEmitter, Component, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent implements OnInit {
  @Input() course: any;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();
  @Output() onEdit: EventEmitter<number> = new EventEmitter<number>();

  // Duration
  // 'PT' + Math.floor(90 / 60) + 'H' + Math.round((90 / 60 - Math.floor(90 / 60))*60) + 'M'

  constructor() { }

  ngOnInit() {
  }

  public delete(): void {
    this.onDelete.emit(this.course.id);
  }

  public edit(): void {
    this.onEdit.emit(this.course.id);
  }

}
