import { computed, Injectable, signal } from '@angular/core';

export interface ListInfo {
  id: string;
  name: string;
  description: string;
}

const skeletonListInfo: ListInfo = {
  id: '',
  name: '',
  description: '',
};

@Injectable()
export class ListInfoStore {
  private listInfo = signal<ListInfo>(skeletonListInfo);
  private loading = signal<boolean>(false);

  setListInfo = (listInfo: ListInfo) => this.listInfo.set(listInfo);
  loadingStart = () => this.loading.set(true);
  loadingEnd = () => this.loading.set(false);

  state = {
    listInfo: this.listInfo.asReadonly(),
    loading: this.loading.asReadonly(),
    isReady: computed(() => this.listInfo().id !== '' && !this.loading()),
  };
}
