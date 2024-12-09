import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { listApi } from '../../../../../api/list';
import { DEFAULT_TIMELINE_LIMIT } from '../../../../../domain/constants/constants';
import { ListTimelineStore } from '../list-timeline.store';

@Injectable()
export class InitUsecase {
  private readonly store = inject(ListTimelineStore);

  async execute(listId: string): Promise<void> {
    this.store.setListId(listId);
    this.store.loadingStart();
    const res = await lastValueFrom(listApi.getListPosts(listId, 0, DEFAULT_TIMELINE_LIMIT));
    console.log(res);
    this.store.updatePosts(res.posts);
    this.store.setTotalPostCount(res.totalCount);
    this.store.loadingEnd();
  }
}
