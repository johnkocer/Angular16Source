import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService2 {

  private readonly http: HttpClient;

  getTodos() {
    return this.http.get('/todos');
  }

  createTodo(todo: Todo) {
    return this.http.post('/todos', todo);
  }

  updateTodo(id: number, todo: Todo) {
    return this.http.put('/todos/' + id, todo);
  }

  deleteTodo(id: number) {
    return this.http.delete('/todos/' + id);
  }

}