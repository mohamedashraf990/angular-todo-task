import { Injectable } from '@angular/core';
import { completedTodoList, pendingTodoList } from '../todo-items/todosList';
import { todoItem } from '../todo-items/todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private completedTodos: todoItem[] = [...completedTodoList];
  private pendingTodos: todoItem[] = [...pendingTodoList];

  getCompletedTodos() {
    return [...this.completedTodos];
  }

  getPendingTodos() {
    return [...this.pendingTodos];
  }

  sortTodos(list: todoItem[], sortInput: string): todoItem[] {
    if (sortInput === '1') {
      return [...list].sort((a, b) => Number(b.priority) - Number(a.priority));
    } else {
      return [...list].sort((a, b) => Number(a.priority) - Number(b.priority));
    }
  }

  filterTodos(list: todoItem[], searchInput: string): todoItem[] {
    if (!searchInput) {
      return list;
    }
    return list.filter(
      (item) =>
        item.title.toLowerCase().startsWith(searchInput.toLowerCase()) ||
        item.description.toLowerCase().startsWith(searchInput.toLowerCase())
    );
  }

  addPendingTodo(item: todoItem) {
    console.log('Adding new todo item:', item);
    this.pendingTodos = [...this.pendingTodos, item];
  }

  completeTodo(item: todoItem) {
    this.pendingTodos = this.pendingTodos.filter((t) => t !== item);
    this.completedTodos = [...this.completedTodos, item];
  }
}
