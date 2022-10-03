import { Component, Input } from '@angular/core';
import { Post } from '../posts/post.model';

@Component({
  selector: 'mean-app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  @Input()
  posts!: Post[];
  panelOpenState = false;
}
