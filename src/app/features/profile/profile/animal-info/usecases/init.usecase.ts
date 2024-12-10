import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { animalApi } from '../../../../../api/animal';
import { AuthStore } from '../../../../../core/auth/auth.store';
import { AnimalInfoStore } from '../animal-info.store';

@Injectable()
export class InitUsecase {
  private readonly store = inject(AnimalInfoStore);
  private readonly authStore = inject(AuthStore);

  async execute(animalId: string | undefined): Promise<void> {
    if (animalId !== undefined) {
      this.store.setAnimalId(animalId);
      this.store.setMyInfo(this.authStore.state.animal() === animalId);
    } else {
      const id = this.authStore.state.animal();
      this.store.setAnimalId(id);
      this.store.setMyInfo(true);
    }
    const id = this.store.state.animalId();
    this.store.loadingStart();
    try {
      const res = await lastValueFrom(animalApi.getAnimalDetail(id));
      this.store.setAnimalInfo(res);
    } catch (e) {
      console.error(e);
    } finally {
      this.store.loadingEnd();
    }
  }
}
