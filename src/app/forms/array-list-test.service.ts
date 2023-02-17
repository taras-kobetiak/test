import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArray } from './forms.component';

@Injectable({
  providedIn: 'root'
})
export class ArrayListTestService {

  constructor(private http: HttpClient) { }

  getArrayList(): Observable<IArray[]> {
    return this.http.get<IArray[]>('http.adress')
  }



}
