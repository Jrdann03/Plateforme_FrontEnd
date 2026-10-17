import { Component, computed, input, output, signal } from '@angular/core';
import { DEFAULTHEADERCONFIG, HeaderConfig, HeaderConfigInput } from './header.config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly configInput = input<HeaderConfigInput>({}, { alias: 'config' });

  protected readonly config = computed<HeaderConfig>(() => {
    const custom = this.configInput();
    const defaults = DEFAULTHEADERCONFIG;

    return {
      ...defaults,
      ...custom,
      brand: { ...defaults.brand, ...custom.brand },
      logo: { ...defaults.logo, ...custom.logo },
      navigation: custom.navigation ?? defaults.navigation,
      search: { ...defaults.search, ...custom.search },
      theme: { ...defaults.theme, ...custom.theme },
    };
  });

  protected readonly searchTerm = signal('');
  readonly searchSubmitted = output<string>();

  protected onSearchInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.searchTerm.set(inputElement.value);
  }

  protected onSearchSubmit(event: Event): void {
    event.preventDefault();
    if (!this.config().search.visible) return;

    const query = this.searchTerm().trim();
    if (query.length > 0) {
      this.searchSubmitted.emit(query);
    }
  }

  protected clearSearch(): void {
    this.searchTerm.set('');
  }
}