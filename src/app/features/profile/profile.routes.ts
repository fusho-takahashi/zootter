import { Routes } from '@angular/router';
import { ProfilePageComponent } from './profile/profile-page.component';

export default [
  { path: '', component: ProfilePageComponent },
  { path: ':id', component: ProfilePageComponent },
] as Routes;
