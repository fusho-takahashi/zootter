import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListInfoComponent } from './list-info/list-info';
import { ListTimelineComponent } from './list-timeline/list-timeline';

@Component({
  selector: 'app-list-page',
  imports: [ListInfoComponent, ListTimelineComponent],
  templateUrl: './list-page.html',
  styleUrl: './list-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPageComponent {
  private readonly route = inject(ActivatedRoute);
  listId = this.route.snapshot.params['id'];
}
