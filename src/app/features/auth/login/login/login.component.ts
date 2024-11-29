import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroHeaderComponent } from './views/hero-header/hero-header.component';

@Component({
  selector: 'app-login',
  imports: [HeroHeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {}
