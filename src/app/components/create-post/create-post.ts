import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../../services/post';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-post.html',
  styleUrls: ['./create-post.css']
})
export class CreatePost {

 title = '';
body = '';
author = '';
date = '';
readTime = '';

isEdit = false;
postId!: number;

  constructor(
    private postService: Post,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
  const id = this.route.snapshot.paramMap.get('id');

  if (id) {
    this.isEdit = true;
    this.postId = Number(id);

    const post = this.postService.getPostById(this.postId);

    if (post) {
      this.title = post.title;
      this.body = post.body;
      this.author = post.author;
      this.date = post.date;
      this.readTime = post.readTime;
    }
  }
}
savePost() {
  const postData = {
    id: this.postId,
    title: this.title,
    body: this.body,
    author: this.author,
    date: this.date,
    readTime: this.readTime
  };

  console.log('Saving:', postData); 

  if (this.isEdit) {
    this.postService.updatePost(postData);
  } else {
    this.postService.addPost(postData);
  }

  this.router.navigate(['/']);
}
}