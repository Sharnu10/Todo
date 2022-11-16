import { Component } from '@angular/core';
import { PostService } from '../posts.service';

@Component({
  selector: 'mean-app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent {
  textAreaValue =
    'Toutiao App - match with perffect information - recommendation algorithm';
  title = '';
  constructor(public postService: PostService) {}

  onAddPost() {
    this.postService.addPost(this.title, this.textAreaValue);
  }
}
