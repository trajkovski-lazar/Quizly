import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/models/card';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private baseService: BaseService) { }

  addCard(card: Card): Observable<Card> {
    return this.baseService.post('/cards', card);
  }

  editCard(card: Card, id: string): Observable<Card> {
    return this.baseService.put(`/cards/${id}`, card);
  }

  deleteCard(id: string): Observable<Card> {
    return this.baseService.delete(`/cards/${id}`);
  }

  getCard(id: string): Observable<Card> {
    return this.baseService.get(`/cards/${id}`);
  } 
}
