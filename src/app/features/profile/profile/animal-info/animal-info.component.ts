import { ChangeDetectionStrategy, Component, inject, input, OnInit, output } from '@angular/core';
import { AnimalInfoStore } from './animal-info.store';
import { injectUsecases, provideUsecases } from './usecases';
import { AnimalInfoCardComponent } from './views/animal-info-card/animal-info-card.component';

@Component({
  selector: 'app-animal-info',
  imports: [AnimalInfoCardComponent],
  providers: [provideUsecases(), AnimalInfoStore],
  templateUrl: './animal-info.component.html',
  styleUrl: './animal-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimalInfoComponent implements OnInit {
  animalId = input.required<string | undefined>();
  goBack = output<void>();

  private readonly usecases = injectUsecases();
  private readonly store = inject(AnimalInfoStore);

  animalInfo = this.store.state.animalInfo;
  isMyInfo = this.store.state.isMyInfo;
  isReady = this.store.state.isReady;

  ngOnInit() {
    this.usecases.init.execute(this.animalId());
  }

  logout() {
    this.usecases.logout.execute();
  }
}
