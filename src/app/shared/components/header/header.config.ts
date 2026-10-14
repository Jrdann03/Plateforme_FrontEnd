export interface HeaderNavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface HeaderTheme {
  background: string;
  text: string;
  muted: string;
  border: string;
  controlBackground: string;
  controlBorder: string;
  primary: string;
  primaryHover: string;
  textInverse: string;
  focusRing: string;
  radiusSmall: string;
  radiusLarge: string;
  paddingX: string;
  paddingY: string;
}

export interface StoreHeaderConfig {
  navigation: HeaderNavigationItem[];
  showNavigation: boolean;
  showSearch: boolean;
  searchPlaceholder: string;
  searchButtonLabel: string;
  theme: HeaderTheme;
}

export type StoreHeaderConfigInput =
  Omit<Partial<StoreHeaderConfig>, 'theme'> & {
    theme?: Partial<HeaderTheme>;
  };

export const DEFAULT_HEADER_CONFIG: StoreHeaderConfig = {
  navigation: [
    { id: 'home', label: 'Accueil', href: '#accueil' },
    { id: 'categories', label: 'Catégories', href: '#categories' },
    { id: 'products', label: 'Produits', href: '#produits' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],

  showNavigation: true,
  showSearch: true,
  searchPlaceholder: 'Rechercher un produit...',
  searchButtonLabel: 'Rechercher',

  theme: {
    background: '#0a0a0a',
    text: '#e5e5e5',
    muted: '#a3a3a3',
    border: '#252525',
    controlBackground: '#141414',
    controlBorder: '#303030',
    primary: '#6366f1',
    primaryHover: '#4f46e5',
    textInverse: '#ffffff',
    focusRing: '#a5b4fc',
    radiusSmall: '6px',
    radiusLarge: '9px',
    paddingX: '28px',
    paddingY: '14px',
  },
};