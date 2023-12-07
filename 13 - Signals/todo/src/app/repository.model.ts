import { AppDataSource } from "./datasource.model";
import { Injectable, Signal, WritableSignal, signal } from "@angular/core";
import { Todo } from "./todo.model";

@Injectable({
    providedIn: 'root',
})
export class AppStore {
    private dataSource: AppDataSource;
    private todos: WritableSignal<Todo[]>;
    private locator = (p: Todo, id: number | any) => p.id == id;

    constructor() {
        this.dataSource = new AppDataSource();
        this.todos = signal(new Array<Todo>());
        this.todos.mutate(prods => 
            this.dataSource.getData().forEach(p => prods.push(p)));
    }

    get Todos(): Signal<Todo[]> {
        return this.todos.asReadonly();
    }

    getTodo(id: number): Todo | undefined {
        return this.todos().find(p => this.locator(p, id));
    }

    saveTodo(todo: Todo) {
        if (todo.id == 0 || todo.id == null) {
            todo.id = this.generateID();
            this.todos.mutate(prods => prods.push(todo));
        } else {
            this.todos.mutate(prods => {
                let index = prods.findIndex(p => 
                    this.locator(p, todo.id));
                prods.splice(index, 1, todo);
            });
        }
    }

    deleteTodo(id: number) {
        this.todos.mutate(prods => {
            let index = prods.findIndex(p => this.locator(p, id));
            if (index > -1) {
                prods.splice(index, 1);
            }
        });
    }

    private generateID(): number {
        let candidate = 100;
        while (this.getTodo(candidate) != null) {
            candidate++;
        }
        return candidate;
    }
}
