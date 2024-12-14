import { delay, Observable, of } from 'rxjs';

function login(id: string): Observable<{ message: string }> {
  sessionStorage.setItem('animal_id', id);
  return of({ message: 'success' }).pipe(delay(500));
}

function logout(): Observable<{ message: string }> {
  sessionStorage.removeItem('animal_id');
  return of({ message: 'success' }).pipe(delay(500));
}

function getAnimalId(): string | null {
  return sessionStorage.getItem('animal_id');
}

export const authApi = {
  login,
  logout,
  getAnimalId,
};
