export type FooterLayout = 'classic' | 'centered' | 'brand-focused';

export interface FooterLink {
  id: string;
  label: string;
  href: string;
  visible?: boolean;
  external?: boolean;
}

export interface FooterColumn {
  id: string;
  title: string;
  links: FooterLink[];
  visible?: boolean;
}

export interface FooterBrandConfig {
  name: string;
  logoUrl?: string;
  logoAlt?: string;
  description?: string;
  href?: string;
  showLogo?: boolean;
}

export interface FooterSocialLink {
  id: string;
  label: string;
  href: string;
  visible?: boolean;
}

export interface FooterTheme {
  background: string;
  text: string;
  muted: string;
  border: string;
  link: string;
  linkHover: string;
  focusRing: string;
  fontFamily: string;
  fontSize: string;
  paddingX: string;
  paddingY: string;
  columnGap: string;
  rowGap: string;
  contentMaxWidth: string;
}

export interface StoreFooterConfig {
  layout: FooterLayout;
  brand: FooterBrandConfig;
  columns: FooterColumn[];
  showSocialLinks: boolean;
  socialLinks: FooterSocialLink[];
  showCopyright: boolean;
  copyrightText: string;
  bottomLinks: FooterLink[];
  theme: FooterTheme;
}

export type StoreFooterConfigInput = {
  layout?: FooterLayout;
  brand?: Partial<FooterBrandConfig>;
  columns?: FooterColumn[];
  showSocialLinks?: boolean;
  socialLinks?: FooterSocialLink[];
  showCopyright?: boolean;
  copyrightText?: string;
  bottomLinks?: FooterLink[];
  theme?: Partial<FooterTheme>;
};

export const DEFAULTFOOTERCONFIG: StoreFooterConfig = {
  layout: 'classic',

  brand: {
    name: 'Ma boutique',
    href: '/',
    showLogo: false,
  },

  columns: [
    {
      id: 'shop',
      title: 'Notre boutique',
      visible: true,
      links: [
        {
          id: 'about',
          label: 'À propos',
          href: '/a-propos',
        },
        {
          id: 'products',
          label: 'Nos produits',
          href: '/produits',
        },
      ],
    },
    {
      id: 'help',
      title: 'Aide et assistance',
      visible: true,
      links: [
        {
          id: 'faq',
          label: 'Questions fréquentes',
          href: '/faq',
        },
        {
          id: 'delivery',
          label: 'Livraison',
          href: '/livraison',
        },
        {
          id: 'returns',
          label: 'Retours',
          href: '/retours',
        },
      ],
    },
    {
      id: 'legal',
      title: 'Informations légales',
      visible: true,
      links: [
        {
          id: 'privacy',
          label: 'Confidentialité',
          href: '/confidentialite',
        },
        {
          id: 'terms',
          label: "Conditions d'utilisation",
          href: '/conditions',
        },
      ],
    },
  ],

  showSocialLinks: false,
  socialLinks: [],

  showCopyright: true,
  copyrightText: 'Tous droits réservés.',

  bottomLinks: [],

  theme: {
    background: '#ffffff',
    text: '#171717',
    muted: '#737373',
    border: '#e5e5e5',
    link: '#525252',
    linkHover: '#2563eb',
    focusRing: '#93c5fd',

    fontFamily: 'inherit',
    fontSize: '13px',

    paddingX: '28px',
    paddingY: '36px',

    columnGap: '32px',
    rowGap: '24px',

    contentMaxWidth: '1200px',
  },
};