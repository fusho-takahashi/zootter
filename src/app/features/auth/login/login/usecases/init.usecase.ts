import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { animalApi } from '../../../../../api/animal';
import { LoginStore } from '../login.store';

@Injectable()
export class InitUsecase {
  private readonly store = inject(LoginStore);

  async execute(): Promise<void> {
    this.store.animalLoadingStart();
    try {
      const res = await lastValueFrom(animalApi.getAnimals());
      this.store.setAnimals(res.animals);
    } finally {
      this.store.animalLoadingEnd();
    }
  }
}
