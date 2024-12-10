import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./features/auth/auth.routes') },
  { path: 'home', loadChildren: () => import('./features/home/home.routes') },
  { path: 'list', loadChildren: () => import('./features/list/list.routes') },
  { path: 'profile', loadChildren: () => import('./features/profile/profile.routes') },
];
