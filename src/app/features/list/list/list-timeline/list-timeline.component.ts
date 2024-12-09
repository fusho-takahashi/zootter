import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { LoadMoreComponent } from '../../../../shared/ui/load-more/load-more.component';
import { PostListComponent } from '../../../../shared/ui/post-list/post-list.component';
import { ListTimelineStore } from './list-timeline.store';
import { InjectUsecases, provideUsecases } from './usecases';

@Component({
  selector: 'app-list-timeline',
  imports: [PostListComponent, LoadMoreComponent],
  providers: [provideUsecases(), ListTimelineStore],
  templateUrl: './list-timeline.component.html',
  styleUrl: './list-timeline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTimelineComponent implements OnInit {
  listId = input.required<string>();

  private readonly usecases = InjectUsecases();
  private readonly store = inject(ListTimelineStore);

  posts = this.store.state.posts;
  isLoading = this.store.state.loading;
  initLoading = this.store.state.initLoading;
  isAllLoaded = this.store.state.isAllLoaded;

  ngOnInit() {
    this.usecases.init.execute(this.listId());
  }

  loadMore() {
    this.usecases.loadMore.execute();
  }
}
