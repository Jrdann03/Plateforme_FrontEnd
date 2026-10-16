import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./features/commercants/components/commercant-form/commercant-form')
        .then((m) => m.CommercantForm),
  },

  {
    path: 'espace',
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

  {
    path: 'demo',
    loadComponent: () =>
      import('./features/demo/demo/demo')
        .then((m) => m.Demo),
  },

  {
    path: '**',
    redirectTo: '',
  },
];