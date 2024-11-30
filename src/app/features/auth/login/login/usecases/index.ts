import { inject } from '@angular/core';
import { InitUsecase } from './init.usecase';
import { LoginUsecase } from './login.usecase';

export function provideUsecases() {
  return [InitUsecase, LoginUsecase];
}

export function InjectUsecases() {
  return {
    init: inject(InitUsecase),
    login: inject(LoginUsecase),
  };
}
