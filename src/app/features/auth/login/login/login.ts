import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { LoginStore } from './login.store';
import { injectUsecases, provideUsecases } from './usecases';
import { AnimalSelectComponent } from './views/animal-select/animal-select';
import { HeroHeaderComponent } from './views/hero-header/hero-header';

@Component({
  selector: 'app-login',
  imports: [HeroHeaderComponent, AnimalSelectComponent],
  providers: [provideUsecases(), LoginStore],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  private readonly usecases = injectUsecases();
  readonly state = inject(LoginStore).state;

  selectedAnimalId = signal<string[]>([]);
  canLogin = computed(() => this.selectedAnimalId().length > 0);

  ngOnInit() {
    this.usecases.init.execute();
  }

  login() {
    if (this.canLogin() && !this.state.loginLoading()) {
      this.usecases.login.execute(this.selectedAnimalId()[0]);
    }
  }
}
