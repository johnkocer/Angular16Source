// todo-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo.model';
import { FormsModule } from '@angular/forms';
import { AppStore } from './repository.model';

@Component({
    selector: 'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.css'],
  imports: [CommonModule, FormsModule],

    standalone: true
})
export class TodoListComponent implements OnInit {

    todos: Todo[];
    newTodoName : string;
    constructor(private todoService: AppStore) {
        this.newTodoName = 'newtodo';
     }

    ngOnInit() {
        this.todos = this.todoService.Todos();
    }

    addTodo() {
        const todo = new Todo(0,
            this.newTodoName
        );
        console.log(todo);
        this.todoService.saveTodo(todo);
    }

    updateTodo(todo: Todo) {
        console.log("in COm" +JSON.stringify(todo));
        this.todoService.saveTodo( todo);
    }

    deleteTodo(todo: Todo) {
        this.todoService.deleteTodo(todo.id);
    }
}
