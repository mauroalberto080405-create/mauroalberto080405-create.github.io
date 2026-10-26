import { Routes } from '@angular/router';
import { HomePage } from './features/home/home-page';

export const routes: Routes = [
  { path: '', component: HomePage, title: 'Mauro Contreras · Desarrollador Frontend Junior' },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found-page').then((m) => m.NotFoundPage),
    title: 'Página no encontrada · Mauro Contreras',
  },
];
