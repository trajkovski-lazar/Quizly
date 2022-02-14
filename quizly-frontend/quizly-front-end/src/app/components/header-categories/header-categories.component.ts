import { Component, Output, EventEmitter } from '@angular/core';

import { Category } from 'src/models/category';

@Component({
  selector: 'header-categories',
  templateUrl: './header-categories.component.html',
  styleUrls: ['./header-categories.component.css']
})
export class HeaderCategoriesComponent {

  @Output() callOpenCategoryModal:EventEmitter<{ modalName: string, category: Category | undefined }>= 
  new EventEmitter<{ modalName: string, category: Category | undefined }>();

  constructor() { }

  openAddCategoryModal() {
    this.callOpenCategoryModal.emit({ 
      modalName: "addCategory",
      category: undefined
    });
  }
}
