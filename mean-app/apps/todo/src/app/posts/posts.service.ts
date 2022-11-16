import { Post } from './post.model';

export class PostService {
  private posts: Post[] = [];

  getPosts() {
    return this.posts;
  }

  addPost(title: string, content: string) {
    const post = { title: title, content: content };
    this.posts.push(post);
  }
}
