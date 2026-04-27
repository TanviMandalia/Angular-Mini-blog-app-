import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Post {

  posts: any[] = [];

  constructor() {
    const data = localStorage.getItem('posts');
    this.posts = data ? JSON.parse(data) : [
      { id: 1, title: 'First Post', body: 'This is the full content of first post.' },
      { id: 2, title: 'Second Post', body: 'This is the full content of second post.' },
      { id: 3, title: 'Third Post', body: 'This is the full content of third post.' }
    ];
  }

  saveToLocalStorage() {
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }

  getPosts() {
    return this.posts;
  }

  getPostById(id: number) {
    return this.posts.find(post => post.id === id);
  }

 addPost(post: any) {
  const newId = this.posts.length ? this.posts[this.posts.length - 1].id + 1 : 1;

  post.id = newId;
  this.posts.push(post);

  this.saveToLocalStorage();
}

  deletePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id);
    this.saveToLocalStorage();
  }

  updatePost(updatedPost: any) {
    const index = this.posts.findIndex(p => p.id === updatedPost.id);
    if (index !== -1) {
      this.posts[index] = updatedPost;
      this.saveToLocalStorage();
    }
  }
}