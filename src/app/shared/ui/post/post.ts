import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

export interface PostVM {
  id: string;
  authorId: string;
  authorName: string;
  text: string;
  createdAt: string;
}

@Component({
  selector: 'app-post',
  imports: [MatCardModule, DatePipe, RouterLink],
  templateUrl: './post.html',
  styleUrl: './post.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  authorId = input.required<string>();
  authorName = input.required<string>();
  createdAt = input.required<string>();
  text = input.required<string>();
}
