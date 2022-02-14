import { Component, Output, EventEmitter } from '@angular/core';
import { Card } from 'src/models/card';
import { CardDifficulty } from 'src/enums/card-difficulty';

@Component({
  selector: 'add-card-modal',
  templateUrl: './add-card-modal.component.html',
  styleUrls: ['./add-card-modal.component.css']
})
export class AddCardModalComponent {

  constructor() { }

  @Output() callCancelCardModal: EventEmitter<string> = new EventEmitter<string>();
  @Output() callAddNewCard: EventEmitter<Card> = new EventEmitter<Card>();

  cardQuestion: string = "";
  cardAnswer: string = "";
  cardDifficulty: string = "";

  cardDifficultyMap: Record<string, CardDifficulty> = {
    "Easy": CardDifficulty.Easy,
    "Medium": CardDifficulty.Medium,
    "Hard": CardDifficulty.Hard
  }

  addNewCard() {
    const newCard: Card = {
      question: this.cardQuestion,
      answer: this.cardAnswer,
      level: this.cardDifficultyMap[this.cardDifficulty]
    };
    this.callAddNewCard.emit(newCard);
  }

  cancelAddCardModal() {
    this.callCancelCardModal.emit("addCard");
  }

  selectLevel(event: any) {
    if (event?.target?.value)
      this.cardDifficulty = event?.target?.value;
  }
}


