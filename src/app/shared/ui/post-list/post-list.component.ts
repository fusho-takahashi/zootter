import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PostComponent, PostVM } from '../post/post.component';

@Component({
  selector: 'app-post-list',
  imports: [PostComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListComponent {
  posts = input.required<PostVM[]>();
}
