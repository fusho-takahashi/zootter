import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStore } from '../../../../../core/auth/auth.store';
import { LoginStore } from '../login.store';

@Injectable()
export class LoginUsecase {
  private readonly store = inject(LoginStore);
  private readonly authStore = inject(AuthStore);
  private readonly router = inject(Router);

  async execute(animalId: string): Promise<void> {
    this.store.loginLoadingStart();
    // Simulate a login request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.authStore.setAnimal(animalId);
    // this.router.navigateByUrl('/home');
  }
}
