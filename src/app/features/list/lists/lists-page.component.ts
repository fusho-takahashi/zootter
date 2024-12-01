import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListsComponent } from './lists/lists.component';

@Component({
  selector: 'app-lists-page',
  imports: [ListsComponent],
  templateUrl: './lists-page.component.html',
  styleUrl: './lists-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListsPageComponent {}
