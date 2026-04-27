import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { PostDetails } from './components/post-details/post-details';
import { About } from './components/about/about';
import { NotFound } from './components/not-found/not-found';
import { CreatePost } from './components/create-post/create-post';
import { Login } from './components/login/login';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  // 👇 default → login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', component: Login },

  // 👇 protected routes
  { path: 'home', component: Home, canActivate: [authGuard] },
  { path: 'posts/:id', component: PostDetails, canActivate: [authGuard] },
  { path: 'create', component: CreatePost, canActivate: [authGuard] },
  { path: 'edit/:id', component: CreatePost, canActivate: [authGuard] },
  { path: 'about', component: About, canActivate: [authGuard] },

  { path: '**', component: NotFound }
];