import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-hero-header',
  imports: [MatCardModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './hero-header.component.html',
  styleUrl: './hero-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroHeaderComponent {
  canLogin = input.required<boolean>();
  isLoading = input.required<boolean>();
  login = output<void>();
}
