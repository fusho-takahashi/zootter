import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { postApi } from '../../../../../api/post';
import { DEFAULT_TIMELINE_LIMIT } from '../../../../../domain/constants/constants';
import { TimelineStore } from '../timeline.store';

@Injectable()
export class InitUsecase {
  private readonly store = inject(TimelineStore);

  async execute(): Promise<void> {
    this.store.loadingStart();
    const res = await lastValueFrom(postApi.getPosts(0, DEFAULT_TIMELINE_LIMIT));
    this.store.updatePosts(res.posts);
    this.store.setTotalPostCount(res.totalCount);
    this.store.loadingEnd();
  }
}
