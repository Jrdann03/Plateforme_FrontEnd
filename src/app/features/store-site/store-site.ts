import { Component, input } from '@angular/core';

import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';

import {
  StoreFooterConfigInput,
} from '../../shared/components/footer/footer.config';
import {
  HeaderConfigInput,
} from '../../shared/components/header/header.config';

@Component({
  selector: 'app-store-site',
  standalone: true,
  imports: [Header, Footer],
  templateUrl: './store-site.html',
  styleUrl: './store-site.scss',
})
export class StoreSite {
  readonly storeName = input<string>('Ma boutique');

  readonly footerConfig = input<StoreFooterConfigInput>({});
}