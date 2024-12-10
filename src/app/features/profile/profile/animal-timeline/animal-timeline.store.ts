import { computed, Injectable, signal } from '@angular/core';

export interface Post {
  id: string;
  authorId: string;
  authorName: string;
  text: string;
  createdAt: string;
}

@Injectable()
export class AnimalTimelineStore {
  private animalId = signal<string>('');
  private isMyTimeline = signal<boolean>(false);
  private posts = signal<Post[]>([]);
  private totalPostCount = signal<number>(0);
  private loading = signal<boolean>(false);

  setAnimalId = (listId: string) => this.animalId.set(listId);
  setMyTimeline = (isMyTimeline: boolean) => this.isMyTimeline.set(isMyTimeline);
  updatePosts = (posts: Post[]) => this.posts.update((prev) => [...prev, ...posts]);
  setTotalPostCount = (count: number) => this.totalPostCount.set(count);
  loadingStart = () => this.loading.set(true);
  loadingEnd = () => this.loading.set(false);

  state = {
    animalId: this.animalId.asReadonly(),
    isMyTimeline: this.isMyTimeline.asReadonly(),
    posts: this.posts.asReadonly(),
    postCount: computed(() => this.posts().length),
    loading: this.loading.asReadonly(),
    initLoading: computed(() => this.loading() && this.posts().length === 0),
    isAllLoaded: computed(() => this.posts().length >= this.totalPostCount()),
  };
}
