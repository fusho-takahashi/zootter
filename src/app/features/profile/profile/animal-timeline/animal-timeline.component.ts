import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { LoadMoreComponent } from '../../../../shared/ui/load-more/load-more.component';
import { PostListComponent } from '../../../../shared/ui/post-list/post-list.component';
import { AnimalTimelineStore } from './animal-timeline.store';
import { injectUsecases, provideUsecases } from './usecases';

@Component({
  selector: 'app-animal-timeline',
  imports: [PostListComponent, LoadMoreComponent],
  providers: [provideUsecases(), AnimalTimelineStore],
  templateUrl: './animal-timeline.component.html',
  styleUrl: './animal-timeline.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimalTimelineComponent implements OnInit {
  readonly animalId = input.required<string>();

  private readonly usecases = injectUsecases();
  readonly state = inject(AnimalTimelineStore).state;

  ngOnInit() {
    this.usecases.init.execute(this.animalId());
  }

  loadMore() {
    this.usecases.loadMore.execute();
  }
}
