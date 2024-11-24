import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', loadChildren: () => import('./features/auth/auth.routes') },
];
