import { Component, Output, EventEmitter, Input } from '@angular/core';

import { Lecture } from 'src/models/lecture';

@Component({
  selector: 'lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.css']
})
export class LectureListComponent {

  constructor() { }

  @Input() categoryId: string | null = null;
  @Input() lectureList: Lecture[] = [];
  @Output() callOpenLectureModal:EventEmitter<{ modalName: string, lecture: Lecture | undefined}>= 
  new EventEmitter<{ modalName: string, lecture: Lecture | undefined}>();
  

  openEditLectureModal(lecture: Lecture) {
    this.callOpenLectureModal.emit({ 
      modalName: "editLecture",
      lecture: lecture
    });
  }

  openDeleteLectureModal(lecture: Lecture) {
    this.callOpenLectureModal.emit({
      modalName: "deleteLecture",    
      lecture: lecture
    });
  }
}
