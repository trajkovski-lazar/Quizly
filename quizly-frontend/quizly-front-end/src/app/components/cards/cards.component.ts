import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lecture } from 'src/models/lecture';
import { CardService } from 'src/app/services/card/card.service';
import { LectureService } from 'src/app/services/lecture/lecture.service';
import { Card } from 'src/models/card';



@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  selectedLecture: Lecture | undefined;
  cardList: Card[] = [];
  lectureId: string | null = null;

  constructor(private route: ActivatedRoute, private cardService: CardService, private lectureService: LectureService) { }

  isAddCardModalOpened = false;
  isEditCardModalOpened = false;
  isDeleteCardModalOpened = false;
  selectedCard: Card | any;

  ngOnInit() {
    this.lectureId = this.route.snapshot.paramMap.get("lectureId");

    if (this.lectureId)
      this.lectureService.getLecture(this.lectureId).subscribe((lecture: Lecture) => {
        this.selectedLecture = lecture;
        this.cardList = lecture.cards;
      });
  }

  openCardModal(modalOptions: { modalName: string, card: Card | any }) {
    if (modalOptions.modalName === "addCard") {
      this.isAddCardModalOpened = true;
    }
    else if (modalOptions.modalName === "editCard") {
      this.isEditCardModalOpened = true;
      this.selectedCard = modalOptions.card;
    }
    else if (modalOptions.modalName === "deleteCard") {
      this.isDeleteCardModalOpened = true;
      this.selectedCard = modalOptions.card;
    }
  }

  cancelCardModal(modalName: string) {
    if (modalName === "addCard") {
      this.isAddCardModalOpened = false;
    }
    else if (modalName === "editCard") {
      this.isEditCardModalOpened = false;
    }
    else if (modalName === "deleteCard") {
      this.isDeleteCardModalOpened = false;
    }
  }

  addNewCard(newCard: Card) {
    this.cardService.addCard({ ...newCard, lecture: this.selectedLecture }).subscribe(addedCard => this.cardList.push(addedCard));
    this.cancelCardModal("addCard");
    alert("The card has been added successfully!");
  }

  editCard(newCard: Card) {
    if (this.selectedCard)
      this.cardService.editCard(newCard, this.selectedCard.id)
        .subscribe(changedCard => {
          const index = this.cardList.findIndex(element => element.id === this.selectedCard.id);
          this.cardList.splice(index, 1, changedCard)
          this.cancelCardModal("editCard");
          alert("The Card has been changed successfully!");
        });
  }

  deleteCard() {
    if (this.selectedCard) {
      this.cardService.deleteCard(this.selectedCard.id)
      .subscribe(deletedCard => {
        const index = this.cardList.findIndex(element => element.id === this.selectedCard.id);
        this.cardList.splice(index, 1);
        this.cancelCardModal("deleteCard");
        alert("The Card has been deleted successfully!");
      });
    }
  }
}
