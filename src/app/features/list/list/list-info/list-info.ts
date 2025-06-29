import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { ListInfoStore } from './list-info.store';
import { injectUsecases, provideUsecases } from './usecases';
import { ListInfoCardComponent } from './views/list-info-card/list-info-card';

@Component({
  selector: 'app-list-info',
  imports: [ListInfoCardComponent],
  providers: [provideUsecases(), ListInfoStore],
  templateUrl: './list-info.html',
  styleUrl: './list-info.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListInfoComponent implements OnInit {
  listId = input.required<string>();
  private readonly usecases = injectUsecases();
  readonly state = inject(ListInfoStore).state;

  ngOnInit() {
    this.usecases.init.execute(this.listId());
  }
}
