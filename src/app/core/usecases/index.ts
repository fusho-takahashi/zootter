import { inject } from '@angular/core';
import { InitUsecase } from './init.usecase';

export function provideUsecases() {
  return [InitUsecase];
}

export function injectUsecases() {
  return {
    init: inject(InitUsecase),
  };
}
