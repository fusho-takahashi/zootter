import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalInfoComponent } from './animal-info/animal-info.component';
import { AnimalTimelineComponent } from './animal-timeline/animal-timeline.component';

@Component({
  selector: 'app-profile-page',
  imports: [AnimalInfoComponent, AnimalTimelineComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageComponent {
  private readonly route = inject(ActivatedRoute);

  animalId = this.route.snapshot.params['id'];
}
