import { Component, Output, EventEmitter } from '@angular/core';

import { Lecture } from 'src/models/lecture';

@Component({
  selector: 'header-lectures',
  templateUrl: './header-lectures.component.html',
  styleUrls: ['./header-lectures.component.css']
})
export class HeaderLecturesComponent {

  @Output() callOpenLectureModal:EventEmitter<{ modalName: string, lecture: Lecture | undefined }>= 
  new EventEmitter<{ modalName: string, lecture: Lecture | undefined }>();

  constructor() { }

  openAddLectureModal() {
    this.callOpenLectureModal.emit({ 
      modalName: "addLecture",
      lecture: undefined
    });
  }
}
