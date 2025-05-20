import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  @Input({ required: true }) todoDescription: string = '';
}
