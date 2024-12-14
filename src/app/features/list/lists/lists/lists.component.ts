import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ListsStore } from './lists.store';
import { injectUsecases, provideUsecases } from './usecases';
import { ListListComponent } from './views/list-list/list-list.component';

@Component({
  selector: 'app-lists',
  imports: [ListListComponent],
  providers: [provideUsecases(), ListsStore],
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListsComponent implements OnInit {
  private readonly usecases = injectUsecases();
  readonly state = inject(ListsStore).state;

  ngOnInit() {
    this.usecases.init.execute();
  }
}
