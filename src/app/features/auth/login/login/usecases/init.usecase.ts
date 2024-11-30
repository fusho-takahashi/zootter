import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { animalApi } from '../../../../../api/animal';
import { LoginStore } from '../login.store';

@Injectable()
export class InitUsecase {
  private readonly store = inject(LoginStore);

  async execute(): Promise<void> {
    this.store.animalLoadingStart();
    const res = await lastValueFrom(animalApi.getAnimals());
    this.store.setAnimals(res.animals);
    this.store.animalLoadingEnd();
  }
}
