import { HttpErrorResponse } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { GetAnimalDetailResponse, GetAnimalsResponse } from '../domain/models/animal';
import { GetPostsResponse } from '../domain/models/post';
import { animals } from './data/animals';
import { posts } from './data/posts';

function getAnimals(): Observable<GetAnimalsResponse> {
  return of({
    animals: animals.map(({ id, name }) => ({
      id,
      name,
    })),
  }).pipe(delay(500));
}

function getAnimalDetail(id: string): Observable<GetAnimalDetailResponse> {
  const targetAnimal = animals.find((animal) => animal.id === id);
  if (targetAnimal !== undefined) {
    return of(targetAnimal).pipe(delay(500));
  } else {
    throw new HttpErrorResponse({ status: 404, statusText: 'Not Found' });
  }
}

function getAnimalPosts(
  animalId: string,
  offset: number,
  limit: number,
): Observable<GetPostsResponse> {
  const targetPosts = posts.filter((post) => post.authorId === animalId);
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

export const animalApi = {
  getAnimals,
  getAnimalDetail,
  getAnimalPosts,
};
