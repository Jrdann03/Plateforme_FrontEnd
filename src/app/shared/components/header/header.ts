

import { Component, computed, input, output, signal } from '@angular/core';
import {
  DEFAULT_HEADER_CONFIG,
  StoreHeaderConfig,
} from './header.config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly configInput = input<Partial<StoreHeaderConfig>>(
    {},
    { alias: 'config' },
  );

  protected readonly config = computed<StoreHeaderConfig>(() => {
    const custom = this.configInput();

    return {
      ...DEFAULT_HEADER_CONFIG,
      ...custom,
      navigation: custom.navigation ?? DEFAULT_HEADER_CONFIG.navigation,
      theme: {
        ...DEFAULT_HEADER_CONFIG.theme,
        ...custom.theme,
      },
    };
  });

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