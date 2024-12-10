import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListInfoComponent } from './list-info/list-info.component';
import { ListTimelineComponent } from './list-timeline/list-timeline.component';

@Component({
  selector: 'app-list-page',
  imports: [ListInfoComponent, ListTimelineComponent],
  templateUrl: './list-page.component.html',
  styleUrl: './list-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPageComponent {
  private readonly route = inject(ActivatedRoute);
  listId = this.route.snapshot.params['id'];
}
