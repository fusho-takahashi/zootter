import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { TimelineStore } from './timeline.store';
import { InjectUsecases, provideUsecases } from './usecases';
import { LoadMoreComponent } from './views/load-more/load-more.component';
import { PageLoaderComponent } from './views/page-loader/page-loader.component';
import { PostListComponent } from './views/post-list/post-list.component';

@Component({
  selector: 'app-timeline',
  imports: [PostListComponent, LoadMoreComponent, PageLoaderComponent],
  providers: [provideUsecases(), TimelineStore],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent implements OnInit {
  private readonly usecases = InjectUsecases();
  private readonly store = inject(TimelineStore);

  posts = this.store.state.posts;
  isLoading = this.store.state.loading;
  initLoading = this.store.state.initLoading;
  isAllLoaded = this.store.state.isAllLoaded;

  ngOnInit() {
    this.usecases.init.execute();
  }

  loadMore() {
    this.usecases.loadMore.execute();
  }
}
