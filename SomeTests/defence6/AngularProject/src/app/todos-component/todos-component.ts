import { Component } from '@angular/core';
import { TodoService } from '../todo-service'
import { Todo } from '../todos-component'

@Component({
  selector: 'app-todos-component',
  imports: [],
  templateUrl: './todos-component.html',
  styleUrl: './todos-component.css',
})
export class TodosComponent {

@Component({
  selector: 'todos',
  templateUrl: './todo.component.html'
})
export class TodosComponent implements OnInit {

  todos: Todo[] = []
  loading = true

  constructor(private TodoService: TodoService) {}

  ngOnInit(): void {
    this.TodoService.getTodos().(data => {
      this.todos = data
      this.loading = false
    })
  }
}
}