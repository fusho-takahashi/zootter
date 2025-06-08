import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { List } from '../../lists.store';

@Component({
  selector: 'app-list-list',
  imports: [MatListModule, MatIconModule, RouterLink],
  templateUrl: './list-list.html',
  styleUrl: './list-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListListComponent {
  lists = input.required<List[]>();
}
