import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})


export class Header {
  protected readonly searchTerm = signal('');

  readonly searchSubmitted = output<string>();

  protected onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }

  protected onSearchSubmit(event: Event): void {
    event.preventDefault();

    const query = this.searchTerm().trim();

    if (query) {
      this.searchSubmitted.emit(query);
    }
  }

  protected clearSearch(): void {
    this.searchTerm.set('');
  }
}