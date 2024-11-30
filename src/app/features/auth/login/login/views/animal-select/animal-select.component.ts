import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Animal } from '../../login.store';

@Component({
  selector: 'app-animal-select',
  imports: [MatListModule, MatProgressSpinnerModule, FormsModule],
  templateUrl: './animal-select.component.html',
  styleUrl: './animal-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimalSelectComponent {
  animals = input.required<Animal[]>();
  isLoading = input.required<boolean>();
  selectedAnimalId = model.required<string[]>();
}
