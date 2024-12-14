import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { authApi } from '../../../../../api/auth';
import { AuthStore } from '../../../../../core/auth/auth.store';

@Injectable()
export class LogoutUsecase {
  private readonly store = inject(AuthStore);
  private readonly router = inject(Router);

  async execute(): Promise<void> {
    await lastValueFrom(authApi.logout());
    this.store.logout();
    this.router.navigateByUrl('/login');
  }
}
