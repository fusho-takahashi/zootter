import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { animalApi } from '../../../../../api/animal';
import { AuthStore } from '../../../../../core/auth/auth.store';
import { DEFAULT_TIMELINE_LIMIT } from '../../../../../domain/constants/constants';
import { AnimalTimelineStore } from '../animal-timeline.store';

@Injectable()
export class InitUsecase {
  private readonly store = inject(AnimalTimelineStore);
  private readonly authStore = inject(AuthStore);

  async execute(animalId: string | undefined): Promise<void> {
    if (animalId !== undefined) {
      this.store.setAnimalId(animalId);
      this.store.setMyTimeline(this.authStore.state.animal() === animalId);
    } else {
      const id = this.authStore.state.animal();
      this.store.setAnimalId(id);
      this.store.setMyTimeline(true);
    }
    const id = this.store.state.animalId();
    this.store.loadingStart();
    try {
      const res = await lastValueFrom(animalApi.getAnimalPosts(id, 0, DEFAULT_TIMELINE_LIMIT));
      this.store.updatePosts(res.posts);
      this.store.setTotalPostCount(res.totalCount);
    } finally {
      this.store.loadingEnd();
    }
  }
}
