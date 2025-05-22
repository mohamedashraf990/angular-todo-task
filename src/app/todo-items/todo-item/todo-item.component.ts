import { Component, EventEmitter, Input, Output } from '@angular/core';
import { todoItem } from '../todo.model';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [NgIf, NgClass],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input({ required: true }) todoItem!: todoItem;
  @Input() showCompleted?: boolean;
  @Output() todoItemCompleted: EventEmitter<todoItem> = new EventEmitter();

  completeTodoItem() {
    console.log('Todo item completed Id', this.todoItem.todoId);
    this.todoItemCompleted.emit(this.todoItem);
  }
  getPriorityLabel(priority: string): string {
    switch (priority) {
      case '2':
        return 'High';
      case '1':
        return 'Medium';
      case '0':
        return 'Low';
      default:
        return 'Low';
    }
  }
}
