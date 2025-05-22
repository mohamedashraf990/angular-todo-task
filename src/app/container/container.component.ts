import { Component, OnInit } from '@angular/core';
import { TodoItemsComponent } from '../todo-items/todo-items.component';
import { HeaderComponent } from '../header/header.component';
import { todoItem } from '../todo-items/todo.model';
import { NewTodoItemComponent } from '../todo-items/new-todo-item/new-todo-item.component';
import { TodoService } from './container.service';

@Component({
  selector: 'app-container',
  imports: [TodoItemsComponent, HeaderComponent, NewTodoItemComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent implements OnInit {
  completedTodos: todoItem[] = [];
  pendingTodos: todoItem[] = [];
  searchCriteria: string = 'all';
  searchInput: string = '';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.refreshTodos();
    this.getSortInputResult('1');
  }

  refreshTodos() {
    this.completedTodos = this.todoService.getCompletedTodos();
    this.pendingTodos = this.todoService.getPendingTodos();
  }

  getFilterInputResult(searchFilter: string) {
    this.searchCriteria = searchFilter;
  }

  getSearchInputResult(searchInput: string) {
    this.searchInput = searchInput;
  }

  getSortInputResult(sortInput: string) {
    this.pendingTodos = this.todoService.sortTodos(
      this.pendingTodos,
      sortInput
    );
    this.completedTodos = this.todoService.sortTodos(
      this.completedTodos,
      sortInput
    );
  }

  filterTodoItems(list: todoItem[], searchInput: string): todoItem[] {
    return this.todoService.filterTodos(list, searchInput);
  }

  addNewTodoItem(item: todoItem) {
    this.todoService.addPendingTodo(item);
    this.refreshTodos();
    this.getSortInputResult('1');
  }

  todoItemCompleted(todoItem: todoItem) {
    this.todoService.completeTodo(todoItem);
    this.refreshTodos();
    this.getSortInputResult('1');
  }
}
