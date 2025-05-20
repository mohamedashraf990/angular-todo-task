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
  // we need to have output here as well for searchInput

  getFilterResult(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.searchFilter.emit(value);
  }
  getSearchInputResult(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.searchInput.emit(value);
  }
  // we need to send a signal output from headerComponent to the container and based on signal we recievd
  // we will render either two todoLists or only one of them using ngif directive

  // we will be missing the seach
}
