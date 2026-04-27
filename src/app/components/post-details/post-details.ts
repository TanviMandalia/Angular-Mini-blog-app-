import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../../services/post';

@Component({
  selector: 'app-post-details',
  imports: [],
  templateUrl: './post-details.html',
  styleUrl: './post-details.css',
})
export class PostDetails {
   post: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: Post
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.postService.getPostById(id);
  }

  goHome() {
    this.router.navigate(['/']);
  }
}
