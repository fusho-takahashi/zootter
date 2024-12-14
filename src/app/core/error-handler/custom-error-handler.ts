import { ErrorHandler } from '@angular/core';

export class CustomErrorHandler implements ErrorHandler {
  handleError(error: unknown): void {
    console.error('An error occurred:', error);
  }
}
