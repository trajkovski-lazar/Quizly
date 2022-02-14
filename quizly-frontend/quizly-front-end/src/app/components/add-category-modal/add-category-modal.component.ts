import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.css']
})
export class AddCategoryModalComponent {
  
  @Output() callCancelCategoryModal:EventEmitter<string>= new EventEmitter<string>(); 
  @Output() callAddNewCategory: EventEmitter<string>= new EventEmitter<string>();
  
  categoryName: string = "";

  constructor() { }

  addNewCategory() {
    this.callAddNewCategory.emit(this.categoryName);
  }

  cancelAddCategoryModal() {
    this.callCancelCategoryModal.emit("addCategory");
  }
}
  
