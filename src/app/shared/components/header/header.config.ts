/*

Configuration du header partagé par toutes les boutiques.

*

La configuration définit les éléments à afficher et leur disposition.
Les valeurs seront fournies par le frontend ou par le backend.

*/

/* -------------------------------------------------------------------------- / / Disposition du header / / -------------------------------------------------------------------------- */

export type HeaderLayout = | 'classic' | 'centered' | 'search-focused';

/* -------------------------------------------------------------------------- / / Logo / / -------------------------------------------------------------------------- */

export interface HeaderLogoConfig { visible: boolean; imageUrl?: string; alt?: string; href?: string; }

/* -------------------------------------------------------------------------- / / Navigation / / -------------------------------------------------------------------------- */

export interface HeaderNavigationItem { id: string; label: string; href: string; visible?: boolean; }

/* -------------------------------------------------------------------------- / / Recherche / / -------------------------------------------------------------------------- */

export interface HeaderSearchConfig { visible: boolean; placeholder?: string; }

/* -------------------------------------------------------------------------- / / Configuration complète / / -------------------------------------------------------------------------- */

export interface HeaderConfig { layout: HeaderLayout;

/* Nom commercial de la boutique. */ storeName: string;

/* Configuration du logo, facultatif à l'affichage. */ logo: HeaderLogoConfig;

/* Affichage des liens de navigation. */ navigation: HeaderNavigationItem[];

/* Configuration de la barre de recherche. */ search: HeaderSearchConfig; }

/* -------------------------------------------------------------------------- / / Configuration partielle / / -------------------------------------------------------------------------- */

/*

Permet de personnaliser seulement certaines propriétés.

*

Exemple :
{
layout: 'centered',
storeName: 'Ma boutique'
}

*/ export interface HeaderConfigInput { layout?: HeaderLayout; storeName?: string;

logo?: Partial<HeaderLogoConfig>;

navigation?: HeaderNavigationItem[];

search?: Partial<HeaderSearchConfig>; }

/* -------------------------------------------------------------------------- / / Configuration par défaut / / -------------------------------------------------------------------------- */

export const DEFAULTHEADERCONFIG: HeaderConfig = { layout: 'classic',

storeName: 'Ma boutique',

logo: { visible: false, imageUrl: '', alt: 'Logo de la boutique', href: '/', },

navigation: [ { id: 'home', label: 'Accueil', href: '/', visible: true, }, { id: 'products', label: 'Produits', href: '/produits', visible: true, }, { id: 'contact', label: 'Contact', href: '/contact', visible: true, }, ],

search: { visible: true, placeholder: 'Rechercher un produit...', }, };