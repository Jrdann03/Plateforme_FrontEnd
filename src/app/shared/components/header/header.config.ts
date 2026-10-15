/**
 * Configuration du header partagé par toutes les boutiques.
 * Chaque commerçant pourra personnaliser son header
 * sans créer un nouveau composant Angular.
 */

/* -------------------------------------------------------------------------- */
/* Navigation                                                                 */
/* -------------------------------------------------------------------------- */

export interface HeaderNavigationItem {
  id: string;
  label: string;
  href: string;
  visible?: boolean;
  external?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Logo                                                                       */
/* -------------------------------------------------------------------------- */

export interface HeaderLogoConfig {
  type: 'text' | 'image';
  text?: string;
  imageUrl?: string;
  alt?: string;
  href?: string;
}

/* -------------------------------------------------------------------------- */
/* Recherche                                                                  */
/* -------------------------------------------------------------------------- */

export interface HeaderSearchConfig {
  enabled: boolean;
  placeholder: string;
  buttonLabel?: string;
  showButton?: boolean;
}

/* -------------------------------------------------------------------------- */
/* Actions                                                                    */
/* -------------------------------------------------------------------------- */

export type HeaderActionType =
  | 'link'
  | 'cart'
  | 'account'
  | 'contact';

export interface HeaderAction {
  id: string;
  label: string;
  type: HeaderActionType;
  href?: string;
  visible?: boolean;
  style?: 'primary' | 'secondary' | 'text';
}

/* -------------------------------------------------------------------------- */
/* Thème                                                                      */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/* Configuration complète                                                     */
/* -------------------------------------------------------------------------- */

export type HeaderLayout =
  | 'classic'
  | 'centered'
  | 'search-focused';

export interface StoreHeaderConfig {
  logo: HeaderLogoConfig;
  layout: HeaderLayout;

  navigation: HeaderNavigationItem[];
  showNavigation: boolean;

  search: HeaderSearchConfig;

  actions: HeaderAction[];

  theme: HeaderTheme;
}

/* -------------------------------------------------------------------------- */
/* Configuration partielle                                                    */
/* -------------------------------------------------------------------------- */

export type StoreHeaderConfigInput = {
  logo?: Partial<HeaderLogoConfig>;
  layout?: HeaderLayout;

  navigation?: HeaderNavigationItem[];
  showNavigation?: boolean;

  search?: Partial<HeaderSearchConfig>;

  actions?: HeaderAction[];

  theme?: Partial<HeaderTheme>;
};

/* -------------------------------------------------------------------------- */
/* Valeurs par défaut                                                         */
/* -------------------------------------------------------------------------- */

export const DEFAULT_HEADER_CONFIG: StoreHeaderConfig = {
  logo: {
    type: 'text',
    text: 'Ma boutique',
    href: '/',
  },

  layout: 'classic',

  navigation: [
    { id: 'home', label: 'Accueil', href: '#accueil' },
    { id: 'products', label: 'Produits', href: '#produits' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],

  showNavigation: true,

  search: {
    enabled: true,
    placeholder: 'Rechercher un produit...',
    buttonLabel: 'Rechercher',
    showButton: true,
  },

  actions: [
    {
      id: 'account',
      label: 'Mon compte',
      type: 'account',
      href: '/connexion',
      visible: true,
      style: 'text',
    },
    {
      id: 'cart',
      label: 'Panier',
      type: 'cart',
      href: '/panier',
      visible: true,
      style: 'secondary',
    },
  ],

  theme: {
    background: '#ffffff',
    text: '#171717',
    muted: '#737373',
    border: '#e5e5e5',

    controlBackground: '#ffffff',
    controlBorder: '#d4d4d4',

    primary: '#2563eb',
    primaryHover: '#1d4ed8',
    textInverse: '#ffffff',
    focusRing: '#93c5fd',

    radiusSmall: '6px',
    radiusLarge: '9px',

    paddingX: '28px',
    paddingY: '14px',
  },
};