import { HttpErrorResponse } from '@angular/common/http';
import { delay, Observable, of } from 'rxjs';
import { GetListDetailResponse, GetListsResponse } from '../domain/models/list';
import { lists } from './data/lists';

function getLists(): Observable<GetListsResponse> {
  return of({ lists }).pipe(delay(500));
}

function getListDetail(listId: string): Observable<GetListDetailResponse> {
  const targetList = lists.find((list) => list.id === listId);
  if (targetList !== undefined) {
    return of({
      id: targetList.id,
      name: targetList.name,
      description: targetList.description,
    }).pipe(delay(500));
  } else {
    throw new HttpErrorResponse({ status: 404, statusText: 'Not Found' });
  }
}

function getListPosts(listId: string, offset: number, limit: number): Observable<any> {
  const targetList = lists.find((list) => list.id === listId);
  if (targetList) {
    const posts = targetList.animals.slice(offset, offset + limit);
    return of({ posts }).pipe(delay(500));
  } else {
    throw new HttpErrorResponse({ status: 404, statusText: 'Not Found' });
  }
}

export const listApi = {
  getLists,
  getListDetail,
  getListPosts,
};
