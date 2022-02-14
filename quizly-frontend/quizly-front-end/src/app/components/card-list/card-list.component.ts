import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Card } from 'src/models/card';

import { animate, state, style, transition, trigger } from '@angular/animations';


export interface CardData {
  state: 'default' | 'flipped' | 'matched';
}

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ]
})
export class CardListComponent {
  
  data: CardData = {
    state: 'default'
  };

  constructor() { }

  @Input() lectureId: string | null = null;
  @Input() cardList: Card[] = [];
  @Output() callOpenCardModal:EventEmitter<{ modalName: string, card: Card | undefined }>= 
  new EventEmitter<{ modalName: string, card: Card | undefined }>();
 

 
  
 /* cardClicked() {
    if (this.data.state === 'default') {
      this.data.state = 'flipped';
    }
    else {
      this.data.state ='default';
    }
  } */
  
  openEditCardModal(card: Card) {
    this.callOpenCardModal.emit({
      modalName: "editCard",
      card: card
    });
  }

  openDeleteCardModal(card: Card) {
    this.callOpenCardModal.emit({
      modalName: "deleteCard",
      card: card
    })
  }
}
