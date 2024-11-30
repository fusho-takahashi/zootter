import { delay, Observable, of } from 'rxjs';
import { GetAnimalsResponse } from '../domain/models/animal';
import { animals } from './data/animals';

function getAnimals(): Observable<GetAnimalsResponse> {
  return of({ animals }).pipe(delay(500));
}

export const animalApi = {
  getAnimals,
};
