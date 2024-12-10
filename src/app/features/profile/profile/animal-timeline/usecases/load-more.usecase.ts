import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { listApi } from '../../../../../api/list';
import { DEFAULT_TIMELINE_LIMIT } from '../../../../../domain/constants/constants';
import { AnimalTimelineStore } from '../animal-timeline.store';

@Injectable()
export class LoadMoreUsecase {
  private readonly store = inject(AnimalTimelineStore);

  async execute(): Promise<void> {
    const animalId = this.store.state.animalId();
    const offset = this.store.state.postCount();
    this.store.loadingStart();
    const res = await lastValueFrom(listApi.getListPosts(animalId, offset, DEFAULT_TIMELINE_LIMIT));
    this.store.updatePosts(res.posts);
    this.store.setTotalPostCount(res.totalCount);
    this.store.loadingEnd();
  }
}
