import { Injectable, signal } from '@angular/core';

export interface List {
  id: string;
  name: string;
  animals: string[];
}

@Injectable()
export class ListsStore {
  private lists = signal<List[]>([]);
  private isLoading = signal<boolean>(false);

  setLists = (lists: List[]) => this.lists.set(lists);

  loadingStart = () => this.isLoading.set(true);
  loadingEnd = () => this.isLoading.set(false);

  state = {
    lists: this.lists.asReadonly(),
    isLoading: this.isLoading.asReadonly(),
  };
}
