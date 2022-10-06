import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../posts/post.model';
import { PostService } from '../posts/posts.service';

@Component({
  selector: 'mean-app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  @Input()
  posts!: Post[];
  panelOpenState = false;

  constructor(public postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
  }
}
