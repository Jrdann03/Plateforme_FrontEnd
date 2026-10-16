/*
 * Configuration du header partagé par toutes les boutiques.
 *
 * Le backend transmet les préférences du commerçant.
 * Le frontend utilise cette configuration pour déterminer
 * les éléments à afficher et leur disposition.
 */

/* ==========================================================================
   1. DISPOSITIONS DISPONIBLES
   ========================================================================== */

export type HeaderLayout =
  | 'classic'
  | 'centered'
  | 'search-focused';

/* ==========================================================================
   2. IDENTITÉ DE LA BOUTIQUE
   ========================================================================== */

/*
 * Détermine les éléments de l'identité à afficher.
 *
 * logo-and-name : logo et nom commercial.
 * logo-only     : logo uniquement.
 * name-only     : nom commercial uniquement.
 */
export type HeaderBrandDisplayMode =
  | 'logo-and-name'
  | 'logo-only'
  | 'name-only';

/*
 * Configuration du logo.
 */
export interface HeaderLogoConfig {
  visible: boolean;
  nameVisible: boolean,
  imageUrl?: string;
  alt?: string;
  href?: string;
}

/*
 * Configuration de l'identité commerciale.
 */
export interface HeaderBrandConfig {
  displayMode: HeaderBrandDisplayMode;
}

/* ==========================================================================
   3. NAVIGATION
   ========================================================================== */

/*
 * Représente un lien de navigation.
 */
export interface HeaderNavigationItem {
  id: string;
  label: string;
  href: string;
  visible?: boolean;
}

/* ==========================================================================
   4. RECHERCHE
   ========================================================================== */

/*
 * Configuration de la barre de recherche.
 */
export interface HeaderSearchConfig {
  visible: boolean;
  placeholder?: string;
}

/* ==========================================================================
   5. CONFIGURATION COMPLÈTE
   ========================================================================== */

/*
 * Configuration complète attendue par le composant Header.
 */
export interface HeaderConfig {
  layout: HeaderLayout;

  storeName: string;

  brand: HeaderBrandConfig;

  logo: HeaderLogoConfig;

  navigation: HeaderNavigationItem[];

  search: HeaderSearchConfig;
}

/* ==========================================================================
   6. CONFIGURATION PARTIELLE
   ========================================================================== */

/*
 * Permet de transmettre uniquement les propriétés à personnaliser.
 *
 * Les propriétés absentes utilisent les valeurs par défaut.
 */
export interface HeaderConfigInput {
  layout?: HeaderLayout;

  storeName?: string;

  brand?: Partial<HeaderBrandConfig>;

  logo?: Partial<HeaderLogoConfig>;

  navigation?: HeaderNavigationItem[];

  search?: Partial<HeaderSearchConfig>;
}

/* ==========================================================================
   7. CONFIGURATION PAR DÉFAUT
   ========================================================================== */

/**
 * Valeurs utilisées lorsqu'un commerçant ne personnalise pas son header.
 */
export const DEFAULTHEADERCONFIG: HeaderConfig = {
  layout: 'classic',

  storeName: 'Ma boutique',

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
    {
      id: 'home',
      label: 'Accueil',
      href: '/',
      visible: true,
    },
    {
      id: 'products',
      label: 'Produits',
      href: '/produits',
      visible: true,
    },
    {
      id: 'contact',
      label: 'Contact',
      href: '/contact',
      visible: true,
    },
  ],

  search: {
    visible: true,
    placeholder: 'Rechercher un produit...',
  },
};