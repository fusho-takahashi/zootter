import { Component, inject, OnInit, signal } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthStore } from './core/auth/auth.store';
import { injectUsecases, provideUsecases } from './core/usecases';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, MatTabsModule, RouterLink, RouterLinkActive],
  providers: [provideUsecases()],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent implements OnInit {
  private readonly usecases = injectUsecases();
  readonly authState = inject(AuthStore).state;

  links = signal<string[]>(['home', 'list', 'profile']);

  ngOnInit(): void {
    this.usecases.init.execute();
  }
}
