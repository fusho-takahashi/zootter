import { HttpErrorResponse } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { GetListDetailResponse, GetListsResponse } from '../domain/models/list';
import { GetPostsResponse } from '../domain/models/post';
import { lists } from './data/lists';
import { posts } from './data/posts';

function getLists(): Observable<GetListsResponse> {
  return of({ lists }).pipe(delay(500));
}

function getListDetail(listId: string): Observable<GetListDetailResponse> {
  const targetList = lists.find((list) => list.id === listId);
  if (targetList !== undefined) {
    return of({
      id: targetList.id,
      name: targetList.name,
      animals: targetList.animals,
      description: targetList.description,
    }).pipe(delay(500));
  } else {
    throw new HttpErrorResponse({ status: 404, statusText: 'Not Found' });
  }
}

function getListPosts(listId: string, offset: number, limit: number): Observable<GetPostsResponse> {
  const targetAnimals = lists.find((list) => list.id === listId)?.animals;
  const targetPosts = posts.filter((post) => targetAnimals?.includes(post.authorId));
  if (targetPosts !== undefined) {
    return of({
      offset,
      limit,
      totalCount: targetPosts.length,
      posts: targetPosts.slice(offset, offset + limit),
    }).pipe(delay(500));
  } else {
    throw new HttpErrorResponse({ status: 404, statusText: 'Not Found' });
  }
}

export const listApi = {
  getLists,
  getListDetail,
  getListPosts,
};
