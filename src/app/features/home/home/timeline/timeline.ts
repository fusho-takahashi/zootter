import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { LoadMoreComponent } from '../../../../shared/ui/load-more/load-more';
import { PostListComponent } from '../../../../shared/ui/post-list/post-list';
import { TimelineStore } from './timeline.store';
import { injectUsecases, provideUsecases } from './usecases';

@Component({
  selector: 'app-timeline',
  imports: [PostListComponent, LoadMoreComponent],
  providers: [provideUsecases(), TimelineStore],
  templateUrl: './timeline.html',
  styleUrl: './timeline.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent implements OnInit {
  private readonly usecases = injectUsecases();
  readonly state = inject(TimelineStore).state;

  ngOnInit() {
    this.usecases.init.execute();
  }

  loadMore() {
    this.usecases.loadMore.execute();
  }
}
