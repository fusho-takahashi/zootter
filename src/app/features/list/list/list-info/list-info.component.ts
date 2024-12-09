import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { ListInfoStore } from './list-info.store';
import { injectUsecases, provideUsecases } from './usecases';
import { ListInfoCardComponent } from './views/list-info-card/list-info-card.component';

@Component({
  selector: 'app-list-info',
  imports: [ListInfoCardComponent],
  providers: [provideUsecases(), ListInfoStore],
  templateUrl: './list-info.component.html',
  styleUrl: './list-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListInfoComponent implements OnInit {
  listId = input.required<string>();
  private readonly usecases = injectUsecases();
  private readonly store = inject(ListInfoStore);

  isReady = this.store.state.isReady;
  listInfo = this.store.state.listInfo;

  ngOnInit() {
    this.usecases.init.execute(this.listId());
  }
}
