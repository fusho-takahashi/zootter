import { delay, Observable, of } from 'rxjs';
import { GetPostsResponse } from '../domain/models/post';
import { posts } from './data/posts';

function getPosts(offset: number, limit: number): Observable<GetPostsResponse> {
  return of({
    offset,
    limit,
    totalCount: posts.length,
    posts: posts.slice(offset, offset + limit),
  }).pipe(delay(500));
}

export const postApi = {
  getPosts,
};
