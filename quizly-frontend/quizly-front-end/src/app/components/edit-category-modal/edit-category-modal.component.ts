import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Category } from 'src/models/category';

@Component({
  selector: 'edit-category-modal',
  templateUrl: './edit-category-modal.component.html',
  styleUrls: ['./edit-category-modal.component.css']
})
export class EditCategoryModalComponent {

  @Input() category: Category | undefined;
  @Output() callCancelCategoryModal: EventEmitter<string> = new EventEmitter<string>();
  @Output() callEditCategoryName: EventEmitter<string> = new EventEmitter<string>();

  newCategoryName: string = "";

  constructor() { }

  cancelEditCategoryModal() {
    this.callCancelCategoryModal.emit("editCategory");
  }

  editCategoryName() {
    this.callEditCategoryName.emit(this.newCategoryName);
  }
}