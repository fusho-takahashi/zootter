import { delay, Observable, of } from 'rxjs';
import { GetListsResponse } from '../domain/models/list';
import { lists } from './data/lists';

function getLists(): Observable<GetListsResponse> {
  return of({ lists }).pipe(delay(500));
}

export const listApi = {
  getLists,
};
