import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-load-more',
  imports: [MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './load-more.component.html',
  styleUrl: './load-more.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadMoreComponent {
  isLoading = input.required<boolean>();
  isAllLoaded = input.required<boolean>();
  loadMore = output<void>();
}
