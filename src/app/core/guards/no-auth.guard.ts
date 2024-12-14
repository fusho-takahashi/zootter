import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStore } from '../auth/auth.store';

export const noAuthGuard: CanActivateFn = () => {
  const router = inject(Router);
  const store = inject(AuthStore);
  if (store.state.isLoggedIn()) {
    router.navigateByUrl('/home');
    return false;
  } else {
    return true;
  }
};
