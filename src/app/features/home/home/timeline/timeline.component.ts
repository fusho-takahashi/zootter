import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { LoadMoreComponent } from '../../../../shared/ui/load-more/load-more.component';
import { PostListComponent } from '../../../../shared/ui/post-list/post-list.component';
import { TimelineStore } from './timeline.store';
import { InjectUsecases, provideUsecases } from './usecases';
import { PageLoaderComponent } from './views/page-loader/page-loader.component';

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
