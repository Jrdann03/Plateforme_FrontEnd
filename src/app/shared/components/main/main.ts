import { Component, computed, input } from '@angular/core';
import { HeroBanner } from '../sections/hero-banner/hero-banner';
import { ProductGrid } from '../sections/product-grid/product-grid';
import {
  DEFAULT_MAIN_CONFIG,
  StoreMainConfig,
  StoreMainConfigInput,
} from './main.config';

@Component({
  selector: 'app-store-main',
  standalone: true,
  imports: [HeroBanner, ProductGrid],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class StoreMain {
  readonly configInput = input<StoreMainConfigInput>(
    {},
    { alias: 'config' },
  );

  protected readonly config = computed<StoreMainConfig>(() => {
    const custom = this.configInput();
    const defaults = DEFAULT_MAIN_CONFIG;

    return {
      ...defaults,
      ...custom,
      sections: custom.sections ?? defaults.sections,
    };
  });
}