import { Component, computed, input, output, signal } from '@angular/core';

import { DEFAULTHEADERCONFIG, HeaderConfig, HeaderConfigInput, } from './header.config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})

export class Header {

//Configuration reçue du composant parent.
/*
Elle pourra être définie directement dans le frontend
ou provenir ultérieurement du backend.

*/
readonly configInput = input<HeaderConfigInput>( {}, { alias: 'config' }, );

/*
Configuration complète du header.

Les propriétés non renseignées utilisent les valeurs par défaut.

*/
protected readonly config = computed<HeaderConfig>(() => { const custom = this.configInput(); const defaults = DEFAULTHEADERCONFIG;

return { ...defaults, ...custom,

logo: { ...defaults.logo, ...custom.logo, },

navigation: custom.navigation ?? defaults.navigation,

search: { ...defaults.search, ...custom.search, }, }; });

/*

Valeur actuellement saisie dans la barre de recherche.

*/ protected readonly searchTerm = signal('');

/*

Événement émis lorsque l'utilisateur soumet une recherche.

*

Le composant parent décidera ensuite comment traiter la requête.

*/ readonly searchSubmitted = output<string>();

/*

Met à jour la recherche pendant la saisie.

*/
protected onSearchInput(event: Event): void { const inputElement = event.target as HTMLInputElement;

this.searchTerm.set(inputElement.value); }

/*

Soumet la recherche sans recharger la page.

*/ protected onSearchSubmit(event: Event): void { event.preventDefault();

if (!this.config().search.visible) { return; }

const query = this.searchTerm().trim();

if (query.length > 0) { this.searchSubmitted.emit(query); } }

/*

Efface le contenu de la recherche.

*/
protected clearSearch(): void { this.searchTerm.set(''); } }