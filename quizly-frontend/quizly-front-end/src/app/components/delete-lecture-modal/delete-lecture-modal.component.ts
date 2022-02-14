import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Lecture } from 'src/models/lecture';

@Component({
  selector: 'delete-lecture-modal',
  templateUrl: './delete-lecture-modal.component.html',
  styleUrls: ['./delete-lecture-modal.component.css']
})
export class DeleteLectureModalComponent  {

@Input() lecture: Lecture | any;
 @Output() callCancelLectureModal:EventEmitter<string>= new EventEmitter<string>();
 @Output() callDeleteLecture:EventEmitter<string>= new EventEmitter<string>();

  constructor() { }

 cancelDeleteLectureModal() {
    this.callCancelLectureModal.emit("deleteLecture");
 }

 deleteLecture() {
   this.callDeleteLecture.emit();
 }
}
