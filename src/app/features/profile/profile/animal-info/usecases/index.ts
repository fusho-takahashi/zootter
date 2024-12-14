import { inject } from '@angular/core';
import { InitUsecase } from './init.usecase';
import { LogoutUsecase } from './logout.usecase';

export function provideUsecases() {
  return [InitUsecase, LogoutUsecase];
}

export function injectUsecases() {
  return {
    init: inject(InitUsecase),
    logout: inject(LogoutUsecase),
  };
}
