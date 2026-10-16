import { Component, computed, input } from '@angular/core';

import { DEFAULTFOOTERCONFIG, StoreFooterConfig, StoreFooterConfigInput, } from './footer.config';

@Component({ selector: 'app-footer', standalone: true, imports: [], templateUrl: './footer.html', styleUrl: './footer.scss', }) export class Footer {

/*
Configuration reçue par le composant.
Elle pourra provenir du composant StoreSite ou du backend.

*/ readonly configInput = input<StoreFooterConfigInput>( {}, { alias: 'config' }, );

/*

Configuration complète obtenue en fusionnant
les valeurs par défaut et les personnalisations.

*/ protected readonly config = computed<StoreFooterConfig>(() => { const custom = this.configInput(); const defaults = DEFAULTFOOTERCONFIG;

return { ...defaults, ...custom,

brand: { ...defaults.brand, ...custom.brand, },

columns: custom.columns ?? defaults.columns,

socialLinks: custom.socialLinks ?? defaults.socialLinks,

bottomLinks: custom.bottomLinks ?? defaults.bottomLinks,

theme: { ...defaults.theme, ...custom.theme, }, }; });

/*

Année actualisée automatiquement.

*/ protected readonly currentYear = new Date().getFullYear(); }