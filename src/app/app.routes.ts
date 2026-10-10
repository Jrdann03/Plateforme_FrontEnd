import { Routes } from '@angular/router';

export const routes: Routes = [
  // Page d'inscription : reste la page d'accueil
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./features/commercants/components/commercant-form/commercant-form')
        .then((m) => m.CommercantForm),
  },

  // Dashboard commerçant
  {
    path: 'admin',
    loadComponent: () =>
      import('./features/espace-commercant/layout/layout')
        .then((m) => m.Layout),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/espace-commercant/dashboard/dashboard')
            .then((m) => m.Dashboard),
      },
    ],
  },

  // Toute route inconnue revient à l'inscription
  {
    path: '**',
    redirectTo: '',
  },
];