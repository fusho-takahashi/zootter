import { Routes } from '@angular/router';
import { ListPageComponent } from './list/list-page.component';
import { ListsPageComponent } from './lists/lists-page.component';

export default [
  { path: '', component: ListsPageComponent },
  { path: ':id', component: ListPageComponent },
] as Routes;
