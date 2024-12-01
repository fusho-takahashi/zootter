import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-post',
  imports: [MatCardModule, DatePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  authorId = input.required<string>();
  authorName = input.required<string>();
  createdAt = input.required<string>();
  text = input.required<string>();
}