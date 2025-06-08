import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TimelineComponent } from './timeline/timeline';

@Component({
  selector: 'app-home-page',
  imports: [TimelineComponent],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
