import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mean-app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent {
  textAreaValue =
    'Toutiao App - match with perffect information - recommendation algorithm';
  title = '';
  @Output() postCreated = new EventEmitter();

  onAddPost() {
    const post = {
      title: this.title,
      content: this.textAreaValue,
    };
    this.postCreated.emit(post);
  }
}
