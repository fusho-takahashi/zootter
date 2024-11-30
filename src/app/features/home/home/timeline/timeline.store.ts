import { Injectable, signal } from '@angular/core';

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

  updatePosts = (posts: Post[]) => this.posts.set(posts);

  loadingStart = () => this.loading.set(true);
  loadingEnd = () => this.loading.set(false);

  state = {
    posts: this.posts.asReadonly(),
    loading: this.loading.asReadonly(),
  };
}
