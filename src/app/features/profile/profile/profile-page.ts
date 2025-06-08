import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalInfoComponent } from './animal-info/animal-info';
import { AnimalTimelineComponent } from './animal-timeline/animal-timeline';

@Component({
  selector: 'app-profile-page',
  imports: [AnimalInfoComponent, AnimalTimelineComponent],
  templateUrl: './profile-page.html',
  styleUrl: './profile-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageComponent {
  private readonly route = inject(ActivatedRoute);

  animalId = this.route.snapshot.params['id'];
}
