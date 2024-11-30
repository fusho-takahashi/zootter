import { computed, effect, Injectable, signal } from '@angular/core';
import { Animal } from '../../../../domain/models/animal';

@Injectable()
export class LoginStore {
  private animals = signal<Animal[]>([]);
  private processCount = signal<number>(0);

  constructor() {
    effect(() => console.log('animals:', this.animals()));
  }

  setAnimals = (animals: Animal[]) => this.animals.set(animals);

  incrementProcessCount = () => this.processCount.update((count) => count + 1);
  decrementProcessCount = () => this.processCount.update((count) => (count > 0 ? count - 1 : 0));

  state = {
    animals: this.animals.asReadonly(),
    processing: computed(() => this.processCount() > 0),
  };
}
