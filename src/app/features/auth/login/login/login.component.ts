import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { LoginStore } from './login.store';
import { InjectUsecases, provideUsecases } from './usecases';
import { AnimalSelectComponent } from './views/animal-select/animal-select.component';
import { HeroHeaderComponent } from './views/hero-header/hero-header.component';

@Component({
  selector: 'app-login',
  imports: [HeroHeaderComponent, AnimalSelectComponent],
  providers: [provideUsecases(), LoginStore],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  usecases = InjectUsecases();
  store = inject(LoginStore);

  selectedAnimalId = signal<string[]>([]);

  canLogin = computed(() => this.selectedAnimalId().length > 0);
  isLoggingIn = computed(() => this.store.state.loginLoading());

  animals = computed(() => this.store.state.animals());
  isAnimalsLoading = computed(() => this.store.state.animalLoading());

  ngOnInit() {
    this.usecases.init.execute();
  }

  login() {
    if (this.canLogin() && !this.isLoggingIn()) {
      this.usecases.login.execute(this.selectedAnimalId()[0]);
    }
  }
}
