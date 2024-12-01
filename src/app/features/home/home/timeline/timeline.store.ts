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
  private loading = signal<boolean>(false);

  updatePosts = (posts: Post[]) => this.posts.update((prev) => [...prev, ...posts]);

  loadingStart = () => this.loading.set(true);
  loadingEnd = () => this.loading.set(false);

  state = {
    posts: this.posts.asReadonly(),
    postCount: computed(() => this.posts().length),
    loading: this.loading.asReadonly(),
    initLoading: computed(() => this.loading() && this.posts().length === 0),
  };
}
