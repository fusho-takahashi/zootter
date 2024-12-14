import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-info-card',
  imports: [MatCardModule, MatIconModule, MatButtonModule, RouterLink],
  templateUrl: './list-info-card.component.html',
  styleUrl: './list-info-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListInfoCardComponent {
  name = input.required<string>();
  animals = input.required<string[]>();
  description = input.required<string>();
}
