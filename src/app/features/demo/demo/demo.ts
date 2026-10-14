import { Component, signal } from '@angular/core';
import { Header } from '../../../shared/components/header/header';
import { Footer } from '../../../shared/components/footer/footer';
import { StoreHeaderConfigInput } from '../../../shared/components/header/header.config';

const phoneStoreConfig: StoreHeaderConfigInput = {
  navigation: [
    { id: 'home', label: 'Accueil', href: '#accueil' },
    { id: 'phones', label: 'Téléphones', href: '#telephones' },
    { id: 'accessories', label: 'Accessoires', href: '#accessoires' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],
  searchPlaceholder: 'Rechercher un téléphone...',
  theme: {
    primary: '#2563eb',
    primaryHover: '#1d4ed8',
  },
};

const tileStoreConfig: StoreHeaderConfigInput = {
  navigation: [
    { id: 'home', label: 'Accueil', href: '#accueil' },
    { id: 'floors', label: 'Carrelage sol', href: '#sol' },
    { id: 'walls', label: 'Carrelage mural', href: '#murs' },
  ],
  showSearch: false,
  theme: {
    background: '#f7f1e8',
    text: '#554434',
    muted: '#8a7865',
    border: '#e4d8c8',
    controlBackground: '#ffffff',
    controlBorder: '#d8c8b5',
    primary: '#8b6848',
    primaryHover: '#705239',
    textInverse: '#ffffff',
    focusRing: '#b99a79',
    radiusSmall: '4px',
    radiusLarge: '6px',
    paddingX: '28px',
    paddingY: '14px',
  },
};

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [Header, Footer],
  templateUrl: './demo.html',
  styleUrl: './demo.scss',
})
export class Demo {
  protected readonly headerConfig = signal<StoreHeaderConfigInput>(
    phoneStoreConfig,
  );

  protected readonly selectedStore = signal<'phones' | 'tiles'>('phones');

  protected switchStore(store: 'phones' | 'tiles'): void {
    this.selectedStore.set(store);
    this.headerConfig.set(
      store === 'phones' ? phoneStoreConfig : tileStoreConfig,
    );
  }
}