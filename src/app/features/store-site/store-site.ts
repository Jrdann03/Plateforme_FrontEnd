import { Component, input } from '@angular/core';

import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';

@Component({
  selector: 'app-store-site',
  standalone: true,
  imports: [Header, Footer],
  templateUrl: './store-site.html',
  styleUrl: './store-site.scss',
})
export class StoreSite {
  readonly storeName = input<string>('Ma boutique');

  protected readonly footerConfig = {
  storeName: 'Maison Élégance',
  showStoreName: true,
  layout: 'columns' as const,
  showCopyright: true,
  copyrightText: 'Tous droits réservés.',
  columns: [
    {
      id: 'about',
      title: 'À propos',
      links: [
        {
          id: 'about-us',
          label: 'Qui sommes-nous ?',
          href: '/a-propos',
        },
      ],
    },
  ],
  bottomLinks: [],
};
}