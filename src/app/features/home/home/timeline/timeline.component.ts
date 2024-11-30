import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { TimelineStore } from './timeline.store';
import { InjectUsecases, provideUsecases } from './usecases';

@Component({
  selector: 'app-timeline',
  imports: [],
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
