import { inject, Injectable } from '@angular/core';
import { authApi } from '../../api/auth';
import { AuthStore } from '../auth/auth.store';

@Injectable()
export class InitUsecase {
  private readonly store = inject(AuthStore);

  execute(): void {
    const animalId = authApi.getAnimalId();
    if (animalId != null) {
      this.store.setAnimal(animalId);
    }
  }
}
