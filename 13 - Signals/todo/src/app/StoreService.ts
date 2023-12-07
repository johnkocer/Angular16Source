import { Injectable, signal, computed } from '@angular/core';
import { Todo } from './todo.model';

export interface ApplicationState {
    todos: Todo[];
}

const initialState: ApplicationState = {
    todos: [{ id: 1, name: 'Todo 1 ', completed: false },
    { id: 2, name: 'Todo 2 ', completed: false }]
};

@Injectable({
    providedIn: 'root',
})
export class StoreService {
    private readonly _store = signal<ApplicationState>(initialState);
    readonly todos = computed(() => this._store().todos);

    setTodos(todos: Todo[]) {
        this._store.update((s) => ({ ...s, todos }));
    }
    addTodo(todo: Todo) {
        todo.id = this.todos().length + 1;
        this.setTodos([...this.todos(), todo]);
        console.log("in SroreService" + JSON.stringify(todo));
        console.log(JSON.stringify(this.todos()));
    }

    updateTodo(todo: Todo) {
        const index = this.todos().findIndex((t) => t.id === todo.id);
        console.log("todo in service" + JSON.stringify(todo));
        if (index !== -1) {
            this.todos[index] = todo;
            this.setTodos(this.todos());
        }
        console.log(JSON.stringify(this.todos()));
    }

    deleteTodo(id: number) {
        const index = this.todos().findIndex((t) => t.id === id);
        this.todos().splice(index, 1);
        this.setTodos(this.todos());
    }
}