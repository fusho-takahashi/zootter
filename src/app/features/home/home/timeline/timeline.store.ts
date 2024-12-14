import { computed, Injectable, signal } from '@angular/core';

export interface Post {
  id: string;
  authorId: string;
  authorName: string;
  text: string;
  createdAt: string;
}

@Injectable()
export class TimelineStore {
  private posts = signal<Post[]>([]);
  private totalPostCount = signal<number>(0);
  private loading = signal<boolean>(false);

  updatePosts = (posts: Post[]) => this.posts.update((prev) => [...prev, ...posts]);
  setTotalPostCount = (count: number) => this.totalPostCount.set(count);
  loadingStart = () => this.loading.set(true);
  loadingEnd = () => this.loading.set(false);

  state = {
    posts: this.posts.asReadonly(),
    postCount: computed(() => this.posts().length),
    loading: this.loading.asReadonly(),
    isAllLoaded: computed(() => this.posts().length >= this.totalPostCount()),
  };
}
