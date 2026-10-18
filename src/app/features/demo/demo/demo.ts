import { Component, signal } from '@angular/core';
import { StoreSite } from '../../store-site/store-site';
import { HeaderConfigInput } from '../../../shared/components/header/header.config';
import { StoreFooterConfigInput } from '../../../shared/components/footer/footer.config';
import { StoreMainConfigInput } from '../../../shared/components/main/main.config';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [StoreSite],
  templateUrl: './demo.html',
  styleUrl: './demo.scss',
})
export class Demo {
  protected readonly headerConfig = signal<HeaderConfigInput>({
    layout: 'classic',
    storeName: 'Maison Élégance & Tech',
    navigation: [
      { id: 'home', label: 'Accueil', href: '/' },
      { id: 'products', label: 'Produits', href: '/produits' },
      { id: 'contact', label: 'Contact', href: '/contact' },
    ],
  });

protected readonly mainConfig = signal<StoreMainConfigInput>({
  sections: [
    {
      type: 'hero',
      id: 'hero-1',
      title: 'Grande Braderie 2026',
      subtitle: 'Découvrez nos meilleures collections high-tech et maison aux meilleurs prix.',
      ctaText: 'Découvrir le catalogue',
      ctaLink: '/produits',
      theme: {
        backgroundColor: '#1f2937',
        textColor: '#ffffff',
        buttonColor: '#2563eb',
      },
    },
    {
      type: 'product-grid',
      id: 'catalog-multilines',
      title: 'Nos Catalogues Produits',
      groups: [
        {
          id: 'samsung-phones',
          title: 'Téléphones Samsung',
          subtitle: 'Les derniers modèles Galaxy',
          products: [
            { id: 's1', name: 'Samsung Galaxy S24 Ultra', price: 850000, badge: 'Nouveau' },
            { id: 's2', name: 'Samsung Galaxy A55 5G', price: 275000, badge: 'Best-seller' },
            { id: 's3', name: 'Samsung Galaxy Z Fold 5', price: 1100000, badge: 'Premium' },
            { id: 's4', name: 'Samsung Galaxy S23 FE', price: 420000 },
            { id: 's5', name: 'Samsung Galaxy A35', price: 210000 },
          ],
        },
        {
          id: 'furniture-living',
          title: 'Mobilier & Fauteuils',
          subtitle: 'Confort et design pour votre salon',
          products: [
            { id: 'f1', name: 'Fauteuil Nordique Gris', price: 85000, badge: 'Top Vente' },
            { id: 'f2', name: 'Table basse en bois massif', price: 110000 },
            { id: 'f3', name: 'Canapé d’angle 4 places', price: 380000 },
            { id: 'f4', name: 'Buffet Vintage Chêne', price: 195000 },
          ],
        },
        {
          id: 'appliances',
          title: 'Électroménager',
          subtitle: 'Équipements modernes pour la cuisine',
          products: [
            { id: 'e1', name: 'Réfrigérateur NoFrost 350L', price: 420000 },
            { id: 'e2', name: 'Lave-linge Smart 9kg', price: 290000, badge: 'Promo' },
            { id: 'e3', name: 'Micro-ondes Digital 25L', price: 65000 },
            { id: 'e4', name: 'Robot Pâtissier Multifonction', price: 125000 },
          ],
        },
      ],
    },
  ],
});

  protected readonly footerConfig = signal<StoreFooterConfigInput>({
    layout: 'classic',
    brand: {
      name: 'Maison Élégance & Tech',
      description: 'Votre plateforme de confiance pour la maison et la technologie.',
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
      fontFamily: 'inherit',
      fontSize: '13px',
      paddingX: '32px',
      paddingY: '40px',
      columnGap: '36px',
      rowGap: '14px',
      contentMaxWidth: '1200px',
    },
  });
}