import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-lecture-modal',
  templateUrl: './add-lecture-modal.component.html',
  styleUrls: ['./add-lecture-modal.component.css']
})
export class AddLectureModalComponent  {

 @Output() callCancelLectureModal:EventEmitter<string>= new EventEmitter<string>();
 @Output() callAddNewLecture:EventEmitter<string>= new EventEmitter<string>();

 lectureName: string = "";

  constructor() { }

  addNewLecture() {
    this.callAddNewLecture.emit(this.lectureName);
  }

  cancelAddLectureModal() {
    this.callCancelLectureModal.emit("addLecture");
  }
}
