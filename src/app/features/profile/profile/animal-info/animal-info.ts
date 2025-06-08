import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { AnimalInfoStore } from './animal-info.store';
import { injectUsecases, provideUsecases } from './usecases';
import { AnimalInfoCardComponent } from './views/animal-info-card/animal-info-card';

@Component({
  selector: 'app-animal-info',
  imports: [AnimalInfoCardComponent],
  providers: [provideUsecases(), AnimalInfoStore],
  templateUrl: './animal-info.html',
  styleUrl: './animal-info.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimalInfoComponent implements OnInit {
  animalId = input.required<string | undefined>();

  private readonly usecases = injectUsecases();
  readonly state = inject(AnimalInfoStore).state;

  ngOnInit() {
    this.usecases.init.execute(this.animalId());
  }

  logout() {
    this.usecases.logout.execute();
  }
}
