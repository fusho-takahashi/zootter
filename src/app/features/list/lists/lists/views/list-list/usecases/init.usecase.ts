import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { listApi } from '../../../../../../../api/list';
import { ListsStore } from '../../../lists.store';

@Injectable()
export class InitUsecase {
  private readonly store = inject(ListsStore);

  async execute(): Promise<void> {
    this.store.loadingStart();
    const res = await lastValueFrom(listApi.getLists());
    this.store.setLists(res.lists);
    this.store.loadingEnd();
  }
}
