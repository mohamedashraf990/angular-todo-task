import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Output() searchFilter = new EventEmitter<string>();
  @Output() searchInput = new EventEmitter<string>();
  @Output() sortInput = new EventEmitter<string>();
  // we need to have output here as well for searchInput

  getFilterResult(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.searchFilter.emit(value);
  }
  getSearchInputResult(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.searchInput.emit(value);
  }
  getSortResult(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.sortInput.emit(value);
  }
}
