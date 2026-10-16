import { Component, signal } from '@angular/core';

import { StoreSite } from '../../store-site/store-site';

import {
  StoreFooterConfigInput,
} from '../../../shared/components/footer/footer.config';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [StoreSite],
  templateUrl: './demo.html',
  styleUrl: './demo.scss',
})
export class Demo {
  protected readonly footerConfig = signal<StoreFooterConfigInput>({
  layout: 'classic',
  brand: {
    name: 'Maison Élégance',
    description: 'Découvrez notre sélection de produits élégants.',
    href: '/',
    showLogo: false,
  },
  showCopyright: true,
  copyrightText: 'Tous droits réservés.',
  theme: {
    background: '#111827',
    text: '#ffffff',
    muted: '#9ca3af',
    border: '#374151',
    link: '#d1d5db',
    linkHover: '#ffffff',
    focusRing: '#93c5fd',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    paddingX: '32px',
    paddingY: '40px',
    columnGap: '36px',
    rowGap: '14px',
    contentMaxWidth: '1200px',
  },
});
}