import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'src/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private httpClient: HttpClient) { }

  getToken() {
    const token = localStorage.getItem('token');
    return { headers: { "Authorization": `Bearer ${token}`} };
  }
  

  get(url: string, isAuthenticated: boolean = true): Observable<any> {
    const options = this.getToken(); 
    const headerOptions = isAuthenticated ? options : undefined;
  
    return this.httpClient.get(`${API_URL}${url}`, headerOptions);
  }

  post(url: string, data: any, isAuthenticated: boolean = true): Observable<any> {
    const options = this.getToken(); 
    const headerOptions = isAuthenticated ? options : undefined;

    return this.httpClient.post(`${API_URL}${url}`, data, headerOptions);
  }

  put(url: string, body: any, isAuthenticated: boolean = true): Observable<any> {
    const options = this.getToken(); 
    const headerOptions = isAuthenticated ? options : undefined;

    return this.httpClient.put(`${API_URL}${url}`, body, headerOptions);
  }

  delete(url: string, isAuthenticated: boolean = true): Observable<any> {
    const options = this.getToken(); 
    const headerOptions = isAuthenticated ? options : undefined;

    return this.httpClient.delete(`${API_URL}${url}`, headerOptions);
  }
}
