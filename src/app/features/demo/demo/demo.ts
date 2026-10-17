import { Component, signal } from '@angular/core';
import { StoreSite } from '../../store-site/store-site';
import { HeroBanner } from '../../../shared/components/sections/hero-banner/hero-banner';
import { ProductGrid } from '../../../shared/components/sections/product-grid/product-grid';
import { HeaderConfigInput } from '../../../shared/components/header/header.config';
import { StoreFooterConfigInput } from '../../../shared/components/footer/footer.config';
import { StoreSectionConfig } from '../../../shared/components/sections/sections.config';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [StoreSite, HeroBanner, ProductGrid],
  templateUrl: './demo.html',
  styleUrl: './demo.scss',
})
export class Demo {
  protected readonly headerConfig = signal<HeaderConfigInput>({
    layout: 'classic',
    storeName: 'Maison Élégance',
    navigation: [
      { id: 'home', label: 'Accueil', href: '/' },
      { id: 'products', label: 'Produits', href: '/produits' },
      { id: 'contact', label: 'Contact', href: '/contact' },
    ],
  });

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

  /* Configuration des sections de la page d'accueil */
  protected readonly sections = signal<StoreSectionConfig[]>([
    {
      type: 'hero',
      id: 'hero-1',
      title: 'Collection Élégance 2026',
      subtitle: 'Découvrez des pièces uniques pensées pour votre style au quotidien.',
      ctaText: 'Explorer le catalogue',
      ctaLink: '/produits',
      theme: {
        backgroundColor: '#1f2937',
        textColor: '#ffffff',
        buttonColor: '#3b82f6',
      },
    },
    {
      type: 'product-grid',
      id: 'grid-1',
      title: 'Nos meilleures ventes',
      subtitle: 'Sélectionnées spécialement pour vous par nos commerçants.',
      columns: 3,
      products: [
        { id: 'p1', name: 'Fauteuil Nordique', price: 85000, category: 'Mobilier', badge: 'Best-seller' },
        { id: 'p2', name: 'Lampe d’ambiance', price: 25000, category: 'Éclairage' },
        { id: 'p3', name: 'Table basse en bois', price: 110000, category: 'Mobilier', badge: 'Nouveau' },
      ],
    },
  ]);
}