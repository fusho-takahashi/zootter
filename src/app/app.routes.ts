import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./features/auth/auth.routes') },
  { path: 'home', loadChildren: () => import('./features/home/home.routes') },
];
