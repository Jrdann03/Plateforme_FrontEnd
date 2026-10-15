import { Component, computed, input, output, signal } from '@angular/core';

import {
  DEFAULT_HEADER_CONFIG,
  StoreHeaderConfig,
  StoreHeaderConfigInput,
} from './header.config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly configInput = input<StoreHeaderConfigInput>(
    {},
    { alias: 'config' },
  );

  protected readonly config = computed<StoreHeaderConfig>(() => {
    const custom = this.configInput();
    const defaults = DEFAULT_HEADER_CONFIG;

    return {
      ...defaults,
      ...custom,

      logo: {
        ...defaults.logo,
        ...custom.logo,
      },

      navigation: custom.navigation ?? defaults.navigation,

      search: {
        ...defaults.search,
        ...custom.search,
      },

      actions: custom.actions ?? defaults.actions,

      theme: {
        ...defaults.theme,
        ...custom.theme,
      },
    };
  });

  protected readonly searchTerm = signal('');

  readonly searchSubmitted = output<string>();

  readonly actionClicked = output<string>();

  protected onSearchInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchTerm.set(input.value);
  }

  protected onSearchSubmit(event: Event): void {
    event.preventDefault();

    if (!this.config().search.enabled) {
      return;
    }

    const query = this.searchTerm().trim();

    if (query) {
      this.searchSubmitted.emit(query);
    }
  }

  protected clearSearch(): void {
    this.searchTerm.set('');
  }

  protected onActionClick(actionId: string): void {
    this.actionClicked.emit(actionId);
  }
}