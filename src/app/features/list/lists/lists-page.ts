import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListsComponent } from './lists/lists';

@Component({
  selector: 'app-lists-page',
  imports: [ListsComponent],
  templateUrl: './lists-page.html',
  styleUrl: './lists-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListsPageComponent {}
