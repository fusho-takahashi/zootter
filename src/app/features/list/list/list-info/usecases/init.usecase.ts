import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { listApi } from '../../../../../api/list';
import { ListInfoStore } from '../list-info.store';

@Injectable()
export class InitUsecase {
  private readonly store = inject(ListInfoStore);

  async execute(listId: string): Promise<void> {
    this.store.loadingStart();
    try {
      const res = await lastValueFrom(listApi.getListDetail(listId));
      this.store.setListInfo(res);
    } finally {
      this.store.loadingEnd();
    }
  }
}
