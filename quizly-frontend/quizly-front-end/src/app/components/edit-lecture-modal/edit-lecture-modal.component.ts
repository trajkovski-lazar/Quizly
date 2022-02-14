import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Lecture } from 'src/models/lecture';


@Component({
  selector: 'edit-lecture-modal',
  templateUrl: './edit-lecture-modal.component.html',
  styleUrls: ['./edit-lecture-modal.component.css']
})
export class EditLectureModalComponent {

@Input() lecture: Lecture | undefined;
@Output() callCancelLectureModal:EventEmitter<string>= new EventEmitter<string>();
@Output() callEditLectureName:EventEmitter<string>= new EventEmitter<string>();

  newLectureName: string = "";

  constructor() { }

  cancelEditLectureModal() {
    this.callCancelLectureModal.emit("editLecture");
  }

  editLectureName() {
    this.callEditLectureName.emit(this.newLectureName);
  }
}
