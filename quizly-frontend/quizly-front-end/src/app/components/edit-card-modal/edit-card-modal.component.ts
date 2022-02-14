import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Card } from 'src/models/card';
import { CardDifficulty } from 'src/enums/card-difficulty';

@Component({
  selector: 'edit-card-modal',
  templateUrl: './edit-card-modal.component.html',
  styleUrls: ['./edit-card-modal.component.css']
})
export class EditCardModalComponent {

  @Input() card: Card | undefined;
  @Output() callCancelCardModal: EventEmitter<string> = new EventEmitter<string>();
  @Output() callEditCard: EventEmitter<Card> = new EventEmitter<Card>();

  cardQuestion: string = "";
  cardAnswer: string = "";
  cardDifficulty: string = "";

  cardDifficultyMap: Record<string, CardDifficulty> = {
    "Easy": CardDifficulty.Easy,
    "Medium": CardDifficulty.Medium,
    "Hard": CardDifficulty.Hard
  }

  constructor() { }

  cancelEditCardModal() {
    this.callCancelCardModal.emit("editCard");
  }

  selectLevel(event: any) {
    if (event?.target?.value)
      this.cardDifficulty = event?.target?.value;
  }

  editCard() {
      const newCard: Card = {
      question: this.cardQuestion,
      answer: this.cardAnswer,
      level: this.cardDifficultyMap[this.cardDifficulty]
    };
    this.callEditCard.emit(newCard);
  }
}
