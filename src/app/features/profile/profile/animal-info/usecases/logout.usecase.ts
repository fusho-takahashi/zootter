import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from '../../../../../core/auth/auth.store';

@Injectable()
export class LogoutUsecase {
  private readonly store = inject(AuthStore);
  private readonly router = inject(Router);

  execute(): void {
    this.store.logout();
    this.router.navigateByUrl('/login');
  }
}
