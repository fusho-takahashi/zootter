import { computed, Injectable, signal } from '@angular/core';

export interface AnimalInfo {
  id: string;
  name: string;
  description: string;
}

const skeletonAnimalInfo: AnimalInfo = {
  id: '',
  name: '',
  description: '',
};

@Injectable()
export class AnimalInfoStore {
  private animalId = signal<string>('');
  private animalInfo = signal<AnimalInfo>(skeletonAnimalInfo);
  private loading = signal<boolean>(false);
  private isMyInfo = signal<boolean>(false);

  setAnimalId = (animalId: string) => this.animalId.set(animalId);
  setAnimalInfo = (animalInfo: AnimalInfo) => this.animalInfo.set(animalInfo);
  setMyInfo = (isMyInfo: boolean) => this.isMyInfo.set(isMyInfo);
  loadingStart = () => this.loading.set(true);
  loadingEnd = () => this.loading.set(false);

  state = {
    animalId: this.animalId.asReadonly(),
    animalInfo: this.animalInfo.asReadonly(),
    isMyInfo: this.isMyInfo.asReadonly(),
    loading: this.loading.asReadonly(),
    isReady: computed(() => this.animalInfo().id !== '' && !this.loading()),
  };
}
