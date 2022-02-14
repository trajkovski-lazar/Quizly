import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Category } from 'src/models/category';

@Component({
  selector: 'delete-category-modal',
  templateUrl: './delete-category-modal.component.html',
  styleUrls: ['./delete-category-modal.component.css']
})
export class DeleteCategoryModalComponent {

  @Input() category: Category | undefined;
  @Output() callCancelCategoryModal:EventEmitter<string>= new EventEmitter<string>(); 
  @Output() callDeleteCategory:EventEmitter<string>= new EventEmitter<string>();

  constructor() { }

 cancelDeleteCategoryModal() {
   this.callCancelCategoryModal.emit("deleteCategory");
 }

 deleteCategory() {
   this.callDeleteCategory.emit();
 }
}
