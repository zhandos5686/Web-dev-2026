import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.html'
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  loading = true;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data.slice(0, 20);
      this.loading = false;
    });
  }

}