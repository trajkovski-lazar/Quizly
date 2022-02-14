import { Component, Output, EventEmitter, Input } from '@angular/core';

import { Category } from 'src/models/category';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  constructor() {}

  @Input() categoryList: Category[] = [];
  @Output() callOpenCategoryModal:EventEmitter<{modalName: string, category: Category | undefined}>= 
  new EventEmitter<{modalName: string, category: Category | undefined}>();
  
  openEditCategoryModal(category: Category) {
    this.callOpenCategoryModal.emit({ 
      modalName: "editCategory",
      category: category
    });
  }

  openDeleteCategoryModal(category: Category) {
    this.callOpenCategoryModal.emit({
      modalName: "deleteCategory",    
      category: category
    });
  }
}
