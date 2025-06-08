import { Routes } from '@angular/router';
import { ListPageComponent } from './list/list-page';
import { ListsPageComponent } from './lists/lists-page';

export default [
  { path: '', component: ListsPageComponent },
  { path: ':id', component: ListPageComponent },
] as Routes;
