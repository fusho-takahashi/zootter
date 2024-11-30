import { Injectable, signal } from '@angular/core';

export interface Animal {
  id: string;
  name: string;
}

@Injectable()
export class LoginStore {
  private animals = signal<Animal[]>([]);
  private animalLoading = signal<boolean>(false);
  private loginLoading = signal<boolean>(false);

  setAnimals = (animals: Animal[]) => this.animals.set(animals);

  animalLoadingStart = () => this.animalLoading.set(true);
  animalLoadingEnd = () => this.animalLoading.set(false);

  loginLoadingStart = () => this.loginLoading.set(true);
  loginLoadingEnd = () => this.loginLoading.set(false);

  state = {
    animals: this.animals.asReadonly(),
    animalLoading: this.animalLoading.asReadonly(),
    loginLoading: this.loginLoading.asReadonly(),
  };
}
