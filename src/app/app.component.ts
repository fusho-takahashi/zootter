import { Component, inject, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthStore } from './core/auth/auth.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, MatTabsModule, RouterLink, RouterLinkActive],
  providers: [AuthStore],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly authStore = inject(AuthStore);

  isLoggedIn = this.authStore.state.isLoggedIn;

  links = signal<string[]>(['home', 'list', 'profile']);
}
