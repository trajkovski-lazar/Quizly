import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base/base.service';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private baseService: BaseService) { }

  login(email: string, password: string): Observable<any> {
 
     
      return this.baseService.post('/auth/local', { identifier: email, password }, false);
  }

  register(username: string, email: string, password: string) {
    return this.baseService.post('/auth/local/register', { username, email, password }, false);
  }

  resetPassword(email: string) {
    return this.baseService.post('/auth/forgot-password', email, false);
  }
}
