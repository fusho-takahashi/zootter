import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-hero-header',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './hero-header.component.html',
  styleUrl: './hero-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroHeaderComponent {}
