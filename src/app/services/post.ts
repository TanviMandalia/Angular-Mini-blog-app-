import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Post {

  posts: any[] = [];

  constructor() {
    const data = localStorage.getItem('posts');
    this.posts = data ? JSON.parse(data) : [
      {
        id: 1, title: 'Dummy Blog', author : 'Tanvi Mandaliya', date: '25 Sep 2025', time: '02.05Pm' ,body: 'In a world where content floods every corner of the internet, the pressure to be profound or groundbreaking can be overwhelming. Here, we embrace the idea of simplicity. This dummy blog is about taking a breath, appreciating the ordinary, and maybe even finding joy in the mundane.So, what might you find here? A sprinkle of thoughts on daily life, a curious observation about something seemingly trivial, or even a playful exploration of ideas that usually don’t make it to serious blogs.It’s about keeping the tone light, the mood friendly, and the insights relatable.Some Fun Ideas to Ponder The art of doing nothing:How stepping back can sometimes be the best way to move forward.Everyday magic:Finding wonder in small moments—a smile from a stranger, the smell of fresh coffee, or the way sunlight dances through leaves.Curiosity unleashed: Letting your mind wander and explore random questions, no matter how silly they seem.'
      },
      { id: 2, title: 'Angular', author : 'Tanvi Mandaliya', date: '25 Sep 2025', time: '02.05Pm' , body: 'Starting with Angular might seem challenging at first, but once you get the hang of its core concepts, you can create robust, fast, and user-friendly web applications. Keep exploring, experimenting, and building — and you’ll soon appreciate the power of Angular in modern web development.' },
      { id: 3, title: 'Childhood Games', author : 'Tanvi Mandaliya', date: '25 Sep 2025', time: '02.05Pm' , body: 'Classic Outdoor Games Tag: The timeless chase game where one player is "it" and tries to tag others. Hide and Seek:One player counts while others hide, then tries to find them.Hopscotch:Jumping through numbered squares drawn on the ground.Jump Rope:Skipping to rhymes with friends taking turns swinging the rope.Marbles:A game of skill and precision, flicking marbles to hit targets.Indoor and Imaginative PlaBoard Games:From Monopoly to Candy Land, these sparked friendly competition and strategy.Role-Playing:Pretending to be superheroes, doctors, or explorers, nurturing creativity.Card GamesSimple games like Go Fish or Crazy Eights entertained many rainy days.' }
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