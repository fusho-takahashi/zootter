import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { listApi } from '../../../../../api/list';
import { DEFAULT_TIMELINE_LIMIT } from '../../../../../domain/constants/constants';
import { ListTimelineStore } from '../list-timeline.store';

@Injectable()
export class LoadMoreUsecase {
  private readonly store = inject(ListTimelineStore);

  async execute(): Promise<void> {
    const listId = this.store.state.listId();
    const offset = this.store.state.postCount();
    this.store.loadingStart();
    try {
      const res = await lastValueFrom(listApi.getListPosts(listId, offset, DEFAULT_TIMELINE_LIMIT));
      this.store.updatePosts(res.posts);
      this.store.setTotalPostCount(res.totalCount);
    } finally {
      this.store.loadingEnd();
    }
  }
}
