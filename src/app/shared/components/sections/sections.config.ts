/* ==========================================================================
   1. TYPES DE SECTIONS ET D'ITEMS
   ========================================================================== */

export interface HeroSectionConfig {
  type: 'hero';
  id: string;
  visible?: boolean;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImageUrl?: string;
  theme?: {
    backgroundColor?: string;
    textColor?: string;
    buttonColor?: string;
    buttonTextColor?: string;
  };
}

export interface ProductItem {
  id: string;
  name: string;
  price: number;
  currency?: string;
  imageUrl?: string;
  category?: string;
  badge?: string; // ex: "Nouveau", "Promo", "Best-seller"
}

/* Nouveau type pour représenter une ligne / catégorie de catalogue */
export interface ProductGroup {
  id: string;
  title: string;          // Ex: "Téléphones Samsung", "Mobilier & Fauteuils"
  subtitle?: string;       // Ex: "Gamme Galaxy récente"
  products: ProductItem[];
}

export interface ProductGridSectionConfig {
  type: 'product-grid';
  id: string;
  visible?: boolean;
  title?: string;          // Titre général du catalogue (optionnel)
  groups: ProductGroup[];  // Lignes horizontales thématiques
  columns?: 2 | 3 | 4;
}

export interface FeaturesItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface FeaturesSectionConfig {
  type: 'features';
  id: string;
  visible?: boolean;
  items: FeaturesItem[];
}

/* Union de toutes les sections possibles */
export type StoreSectionConfig =
  | HeroSectionConfig
  | ProductGridSectionConfig
  | FeaturesSectionConfig;