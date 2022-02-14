import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Card } from 'src/models/card';

@Component({
  selector: 'delete-card-modal',
  templateUrl: './delete-card-modal.component.html',
  styleUrls: ['./delete-card-modal.component.css']
})
export class DeleteCardModalComponent  {

  @Input() card : Card | undefined;
  @Output() callCancelCardModal: EventEmitter<string>= new EventEmitter<string>();
  @Output() callDeleteCard: EventEmitter<string>= new EventEmitter<string>();

  constructor() { }

  cancelDeleteCardModal() {
    this.callCancelCardModal.emit("deleteCard");
  }

  deleteCard() {
    this.callDeleteCard.emit();
  }
}
