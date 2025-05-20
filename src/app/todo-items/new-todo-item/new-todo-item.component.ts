import { Component, EventEmitter, Output } from '@angular/core';
import { todoItem } from '../todo.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-todo-item',
  imports: [FormsModule],
  templateUrl: './new-todo-item.component.html',
  styleUrl: './new-todo-item.component.css',
})
export class NewTodoItemComponent {
  @Output() addNewTodoItem = new EventEmitter<todoItem>();
  newTodoDescription = '';
  newTodoId = Math.floor(Math.random() * 100);

  onAddTodoItem() {
    this.addNewTodoItem.emit({
      todoId: this.newTodoId,
      description: this.newTodoDescription,
    });
  }
}
