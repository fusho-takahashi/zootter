import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PostComponent, PostVM } from '../post/post';

@Component({
  selector: 'app-post-list',
  imports: [PostComponent],
  templateUrl: './post-list.html',
  styleUrl: './post-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListComponent {
  posts = input.required<PostVM[]>();
}
