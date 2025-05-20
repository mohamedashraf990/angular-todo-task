import { Component, Input } from '@angular/core';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { CommonModule, NgFor } from '@angular/common';
import { todoItem } from './todo.model';

@Component({
  selector: 'app-todo-items',
  imports: [TodoItemComponent, NgFor, CommonModule],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.css',
})
export class TodoItemsComponent {
  @Input({ required: true }) titleStatus = '';
  @Input() todosList: todoItem[] = [];
}
