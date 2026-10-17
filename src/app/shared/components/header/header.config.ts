export type HeaderLayout = 'classic' | 'centered' | 'search-focused';

export type HeaderBrandDisplayMode = 'logo-and-name' | 'logo-only' | 'name-only';

export interface HeaderLogoConfig {
  visible: boolean;
  nameVisible: boolean;
  imageUrl?: string;
  alt?: string;
  href?: string;
}

export interface HeaderBrandConfig {
  displayMode: HeaderBrandDisplayMode;
}

export interface HeaderNavigationItem {
  id: string;
  label: string;
  href: string;
  visible?: boolean;
}

export interface HeaderSearchConfig {
  visible: boolean;
  placeholder?: string;
}

/* Identique au système de thème du Footer */
export interface HeaderTheme {
  background: string;
  text: string;
  muted: string;
  border: string;
  primary: string;
  primaryHover: string;
  controlBackground: string;
  controlBorder: string;
  focusRing: string;
}

export interface HeaderConfig {
  layout: HeaderLayout;
  storeName: string;
  brand: HeaderBrandConfig;
  logo: HeaderLogoConfig;
  navigation: HeaderNavigationItem[];
  search: HeaderSearchConfig;
  theme: HeaderTheme;
}

export interface HeaderConfigInput {
  layout?: HeaderLayout;
  storeName?: string;
  brand?: Partial<HeaderBrandConfig>;
  logo?: Partial<HeaderLogoConfig>;
  navigation?: HeaderNavigationItem[];
  search?: Partial<HeaderSearchConfig>;
  theme?: Partial<HeaderTheme>;
}

export const DEFAULTHEADERCONFIG: HeaderConfig = {
  layout: 'classic',
  storeName: 'Ma boulangerie',

  brand: {
    displayMode: 'logo-and-name',
  },

  logo: {
    visible: false,
    imageUrl: '',
    nameVisible: true,
    alt: '',
    href: '/',
  },

  navigation: [
    { id: 'home', label: 'Accueil', href: '/', visible: true },
    { id: 'products', label: 'Produits', href: '/produits', visible: true },
    { id: 'contact', label: 'Contact', href: '/contact', visible: true },
  ],

  search: {
    visible: true,
    placeholder: 'Rechercher un produit...',
  },

  // theme: {
  //   background: '#fffbeb',      // Fond légèrement crème
  //   text: '#78350f',            // Texte marron chaud
  //   primary: '#d97706',         // Couleur principale ambrée / dorée
  //   primaryHover: '#b45309',    // Survol plus sombre
  //   border: '#fef3c7',          // Bordures dorées claires
  //   controlBackground: '#ffffff'
  // },
  // theme: {
  //   background: '#fffbeb',//'#ffffff',
  //   text: '#78350f',//'#171717',
  //   muted: '#737373',
  //   border: '#e5e5e5',
  //   primary: '#d97706',//'#2563eb',
  //   primaryHover: '#b45309',//'#1d4ed8',
  //   controlBackground: '#ffffff',
  //   controlBorder: '#fef3c7',//'#d4d4d4',
  //   focusRing: '#ffffff'//'#93c5fd',
  // },
  theme: {
    background: '#111827',      // Fond sombre / presque noir
    text: '#f9fafb',        // Texte blanc
    muted: '#737373',
    border: '#1f2937',          // Bordures sombres
    primary: '#6366f1',         // Couleur d'accentuation (violet)
    primaryHover: '#4f46e5',
    
    controlBackground: '#1f2937',
    controlBorder: '#374151',
    focusRing: '#ffffff'//
  },
};