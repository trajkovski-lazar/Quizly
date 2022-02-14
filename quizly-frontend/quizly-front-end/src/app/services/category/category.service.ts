import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/models/category';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private baseService: BaseService) { } 

  getAllCategories(): Observable<Category[]> {
    return this.baseService.get('/categories/by-user');
  } 

  addCategory(category: Category): Observable<Category> {
    return this.baseService.post('/categories', category);
  }

  editCategory(name: string, id: string): Observable<Category> {
    return this.baseService.put(`/categories/${id}`, { name });
  }

  deleteCategory(id: string): Observable<Category> {
    return this.baseService.delete(`/categories/${id}`);
  }  

  getCategory(id: string): Observable<Category> {
    return this.baseService.get(`/categories/${id}`);
  }
}
