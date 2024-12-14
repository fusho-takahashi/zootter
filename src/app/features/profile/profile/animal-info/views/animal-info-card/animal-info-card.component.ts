import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-animal-info-card',
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './animal-info-card.component.html',
  styleUrl: './animal-info-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimalInfoCardComponent {
  id = input.required<string>();
  name = input.required<string>();
  description = input.required<string>();
  isMyInfo = input.required<boolean>();

  logout = output<void>();
}
