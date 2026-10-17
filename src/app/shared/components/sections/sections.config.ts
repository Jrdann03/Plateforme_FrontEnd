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

export interface ProductGridSectionConfig {
  type: 'product-grid';
  id: string;
  visible?: boolean;
  title: string;
  subtitle?: string;
  products: ProductItem[];
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