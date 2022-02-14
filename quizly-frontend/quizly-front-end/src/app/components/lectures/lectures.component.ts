import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/models/category';
import { LectureService } from 'src/app/services/lecture/lecture.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { Lecture } from 'src/models/lecture';




@Component({
  selector: 'lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css']
})


export class LecturesComponent implements OnInit {
  selectedCategory: Category | undefined;
  lectureList: Lecture[] = [];
  categoryId: string | null = null;

  constructor(private route: ActivatedRoute, private lectureService: LectureService, private categoryService: CategoryService) { }

  isAddLectureModalOpened = false;
  isEditLectureModalOpened = false;
  isDeleteLectureModalOpened = false;
  selectedLecture: Lecture | any;

  ngOnInit() {
    this.categoryId = this.route.snapshot.paramMap.get("categoryId");

    if (this.categoryId)
      this.categoryService.getCategory(this.categoryId).subscribe((category: Category) => {
        this.selectedCategory = category;
        this.lectureList = category.lectures;
      });
  }

  openLectureModal(modalOptions: { modalName: string, lecture: Lecture | any }) {
    if (modalOptions.modalName === "addLecture") {
      this.isAddLectureModalOpened = true;
    }
    else if (modalOptions.modalName === "editLecture") {
      this.isEditLectureModalOpened = true;
      this.selectedLecture = modalOptions.lecture;
    }
    else if (modalOptions.modalName === "deleteLecture") {
      this.isDeleteLectureModalOpened = true;
      this.selectedLecture = modalOptions.lecture;
    }
  }

  cancelLectureModal(modalName: string) {
    if (modalName === "addLecture") {
      this.isAddLectureModalOpened = false;
    }
    else if (modalName === "editLecture") {
      this.isEditLectureModalOpened = false;
    }
    else if (modalName === "deleteLecture") {
      this.isDeleteLectureModalOpened = false;
    }
  }

  addNewLecture(newLectureName: string) {
    if (newLectureName !== null && newLectureName !== "") {

      const newLecture = {
        name: newLectureName,
        category: this.selectedCategory
      } as Lecture;

      this.lectureService.addLecture(newLecture).subscribe(addedLecture => this.lectureList.push(addedLecture));
      this.cancelLectureModal("addLecture");
      alert("The lecture has been added successfully!");
    }
    else {
      alert("You need to enter the lecture name!");
    }
  }

  editLectureName(newLectureName: string) {
    if (newLectureName !== null && newLectureName !== "") {
      if (this.selectedLecture)
        this.lectureService.editLecture(newLectureName, this.selectedLecture.id)
          .subscribe(changedLecture => {
            const index = this.lectureList.findIndex(element => element.id === this.selectedLecture.id);
            this.lectureList.splice(index, 1, changedLecture)
          });
      this.cancelLectureModal("editLecture");
      alert("The lecture name has been changed successfully!");
    }
    else {
      alert("You need to enter the lecture name!");
    }

  }

  deleteLecture() {
    if (this.selectedLecture)
      this.lectureService.deleteLecture(this.selectedLecture.id)
        .subscribe(deletedLecture => {
          const index = this.lectureList.findIndex(element => element.id === this.selectedLecture.id);
          this.lectureList.splice(index, 1);
        });
    this.cancelLectureModal("deleteLecture");
    alert("The lecture has been deleted successfully!");
  }
}
