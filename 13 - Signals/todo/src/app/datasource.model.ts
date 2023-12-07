import { Todo } from "./todo.model";

export class AppDataSource {
    private data: Todo[];

    constructor() {
        this.data = new Array<Todo>(
            new Todo(1, "Get milk"),
            new Todo(2, "Get bread"),            
            new Todo(3, "Give break")            
    )}

    getData(): Todo[] {
        return this.data;
    }
}
