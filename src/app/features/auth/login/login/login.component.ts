import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { LoginStore } from './login.store';
import { InjectUsecases, provideUsecases } from './usecases';
import { HeroHeaderComponent } from './views/hero-header/hero-header.component';

@Component({
  selector: 'app-login',
  imports: [HeroHeaderComponent],
  providers: [provideUsecases(), LoginStore],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  usecases = InjectUsecases();
  store = inject(LoginStore);

  animals = computed(() => this.store.state.animals());
  isLoading = computed(() => this.store.state.processing());

  ngOnInit() {
    this.usecases.init.execute();
  }
}
