import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoginComponent } from './login/login';

@Component({
  selector: 'app-login-page',
  imports: [LoginComponent],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LoginPageComponent {}
