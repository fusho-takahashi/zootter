import { computed, Inject, signal } from '@angular/core';

@Inject({ providedIn: 'root' })
export class AuthStore {
  private animalId = signal<string>('araiguma');

  setAnimal(animal: string) {
    this.animalId.set(animal);
  }

  state = {
    isLoggedIn: computed(() => this.animalId().length > 0),
    animal: this.animalId.asReadonly(),
  };
}
