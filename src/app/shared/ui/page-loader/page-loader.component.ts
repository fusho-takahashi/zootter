import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-page-loader',
  imports: [MatProgressSpinnerModule, MatCardModule],
  templateUrl: './page-loader.component.html',
  styleUrl: './page-loader.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageLoaderComponent {}
