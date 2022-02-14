import { Component, Output, EventEmitter } from '@angular/core';

import { Card } from 'src/models/card';

@Component({
  selector: 'header-cards',
  templateUrl: './header-cards.component.html',
  styleUrls: ['./header-cards.component.css']
})
export class HeaderCardsComponent  {

  @Output() callOpenCardModal:EventEmitter<{ modalName: string, card: Card | undefined }>= 
  new EventEmitter<{ modalName: string, card: Card | undefined }>();

  constructor() { }

  openAddCardModal() {
    this.callOpenCardModal.emit({
      modalName: "addCard",
      card: undefined
    });
  }
}
