import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { noAuthGuard } from './core/guards/no-auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./features/auth/auth.routes'),
    canActivate: [noAuthGuard],
  },
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.routes'),
    canActivate: [authGuard],
  },
  {
    path: 'list',
    loadChildren: () => import('./features/list/list.routes'),
    canActivate: [authGuard],
  },
  {
    path: 'profile',
    loadChildren: () => import('./features/profile/profile.routes'),
    canActivate: [authGuard],
  },
];
