import { Component } from '@angular/core';
import { TodoItemsComponent } from '../todo-items/todo-items.component';
import { completedTodoList, pendingTodoList } from '../todo-items/todosList';
import { HeaderComponent } from '../header/header.component';
import { todoItem } from '../todo-items/todo.model';
import { NewTodoItemComponent } from '../todo-items/new-todo-item/new-todo-item.component';

@Component({
  selector: 'app-container',
  imports: [TodoItemsComponent, HeaderComponent, NewTodoItemComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  completedTodos: todoItem[] = completedTodoList;
  pendingTodos: todoItem[] = pendingTodoList;
  searchCriteria: string = 'all';
  searchInput: string = '';
  getFilterResult(searchFilter: string) {
    this.searchCriteria = searchFilter;
  }
  getSearchInputResult(searchInput: string) {
    this.searchInput = searchInput;
  }

  filterTodoItems(list: todoItem[], searchInput: string): todoItem[] {
    return list.filter((item) =>
      item.description.toLowerCase().startsWith(searchInput.toLowerCase())
    );
  }
  addNewTodoItem(item: todoItem) {
    console.log(item);
    const newTodos: todoItem[] = [...this.completedTodos];
    newTodos.push(item);
    this.completedTodos = newTodos;
  }
}
