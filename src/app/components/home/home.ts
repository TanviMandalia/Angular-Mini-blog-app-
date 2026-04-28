import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { Post } from '../../services/post';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
// posts = [...];
posts: any[] = [];

  constructor(private postService: Post) {
  this.posts = this.postService.getPosts();

  console.log(this.posts);
}

  delete(id: number) {
  this.postService.deletePost(id);
  this.posts = this.postService.getPosts();
}
}
