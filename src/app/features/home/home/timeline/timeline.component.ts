import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { TimelineStore } from './timeline.store';
import { InjectUsecases, provideUsecases } from './usecases';
import { PostListComponent } from './views/post-list/post-list.component';

@Component({
  selector: 'app-timeline',
  imports: [PostListComponent],
  providers: [provideUsecases(), TimelineStore],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineComponent implements OnInit {
  private readonly usecases = InjectUsecases();
  private readonly store = inject(TimelineStore);

  posts = this.store.state.posts;

  ngOnInit() {
    this.usecases.init.execute();
  }
}
