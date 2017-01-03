import { Component } from '@angular/core';

export class Todo {
	done: boolean = false;
	constructor(public title: string) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Todo[] = [];
	newTodoText = '';

	toggle(todo: Todo) {
		todo.done = !todo.done;
	}

	remove(idx: number) {
		this.todos.splice(idx, 1);
	}

  add(title: string) {
		this.todos.push(new Todo(title));
		this.newTodoText = '';
	}
}
