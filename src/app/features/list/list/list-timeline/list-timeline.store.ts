import { computed, Injectable, signal } from '@angular/core';

export interface Post {
  id: string;
  authorId: string;
  authorName: string;
  text: string;
  createdAt: string;
}

@Injectable()
export class ListTimelineStore {
  private listId = signal<string>('');
  private posts = signal<Post[]>([]);
  private totalPostCount = signal<number>(0);
  private loading = signal<boolean>(false);

  setListId = (listId: string) => this.listId.set(listId);
  updatePosts = (posts: Post[]) => this.posts.update((prev) => [...prev, ...posts]);
  setTotalPostCount = (count: number) => this.totalPostCount.set(count);
  loadingStart = () => this.loading.set(true);
  loadingEnd = () => this.loading.set(false);

  state = {
    listId: this.listId.asReadonly(),
    posts: this.posts.asReadonly(),
    postCount: computed(() => this.posts().length),
    loading: this.loading.asReadonly(),
    initLoading: computed(() => this.loading() && this.posts().length === 0),
    isAllLoaded: computed(() => this.posts().length >= this.totalPostCount()),
  };
}
