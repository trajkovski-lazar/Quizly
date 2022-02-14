import { Component, OnInit } from '@angular/core';


import { CategoryService } from 'src/app/services/category/category.service';
import { Category } from 'src/models/category';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }

  isAddCategoryModalOpen = false;
  isEditCategoryModalOpen = false;
  isDeleteCategoryModalOpen = false;
  categoryList: Category[] = [];
  selectedCategory: Category | any;

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(categories => this.categoryList = categories);
  }

  openCategoryModal(modalOptions: { modalName: string, category: Category | any }) {
    if (modalOptions.modalName === "addCategory") {
      this.isAddCategoryModalOpen = true;
    }
    else if (modalOptions.modalName === "editCategory") {
      this.isEditCategoryModalOpen = true;
      this.selectedCategory = modalOptions.category;
    }
    else if (modalOptions.modalName === "deleteCategory") {
      this.isDeleteCategoryModalOpen = true;
      this.selectedCategory = modalOptions.category;
    }
  }

  cancelCategoryModal(modalName: string) {
    if (modalName === "addCategory") {
      this.isAddCategoryModalOpen = false;
    }
    else if (modalName === "editCategory") {
      this.isEditCategoryModalOpen = false;
    }
    else if (modalName === "deleteCategory") {
      this.isDeleteCategoryModalOpen = false;
    }
  }

  addNewCategory(newCategoryName: string) {
    if (newCategoryName !== null && newCategoryName !== "") {
      const newCategory = { name: newCategoryName } as Category;
      this.categoryService.addCategory(newCategory)
        .subscribe(addedCategory => this.categoryList.push(addedCategory));
      this.cancelCategoryModal("addCategory");
      alert("The category has been added successfully!");
    }
    else {
      alert("You need to enter your category name!");
    }
  }

  editCategoryName(newCategoryName: string) {
    if (newCategoryName !== null && newCategoryName !== "") {
      if (this.selectedCategory)
        this.categoryService.editCategory(newCategoryName, this.selectedCategory.id)
          .subscribe(changedCategory => {
            const index = this.categoryList.findIndex(element => element.id === this.selectedCategory.id);
            this.categoryList.splice(index, 1, changedCategory)
          });
      this.cancelCategoryModal("editCategory");
      alert("The category name has been changed successfully!");
    }
    else {
      alert("You need to enter your new category name!");
    }
  }

  deleteCategory() {
    if (this.selectedCategory)
      this.categoryService.deleteCategory(this.selectedCategory.id)
        .subscribe(deletedCategory => {
          const index = this.categoryList.findIndex(element => element.id === this.selectedCategory.id);
          this.categoryList.splice(index, 1)
        });
    this.cancelCategoryModal("deleteCategory");
    alert("The category has been deleted successfully!");
  }
}

