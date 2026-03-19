import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Todo } from '../models/todo'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl)
  }

  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/${id}`)
  }
}