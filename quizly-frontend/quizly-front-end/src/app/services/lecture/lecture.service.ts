import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lecture } from 'src/models/lecture';
import { BaseService } from '../base/base.service';


@Injectable({
  providedIn: 'root'
})
export class LectureService {

  constructor(private baseService: BaseService) { }

  addLecture(lecture: Lecture): Observable<Lecture> {
    return this.baseService.post('/lectures', lecture);
  }

  editLecture(name: string, id: string): Observable<Lecture> {
    return this.baseService.put(`/lectures/${id}`, { name });
  }

  deleteLecture(id: string): Observable<Lecture> {
    return this.baseService.delete(`/lectures/${id}`);
  }

  getLecture(id: string): Observable<Lecture> {
    return this.baseService.get(`/lectures/${id}`)
  }
}
