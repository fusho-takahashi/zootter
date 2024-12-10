import { inject } from '@angular/core';
import { InitUsecase } from './init.usecase';
import { LoadMoreUsecase } from './load-more.usecase';

export function provideUsecases() {
  return [InitUsecase, LoadMoreUsecase];
}

export function injectUsecases() {
  return {
    init: inject(InitUsecase),
    loadMore: inject(LoadMoreUsecase),
  };
}
