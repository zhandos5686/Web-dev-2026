import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PostsComponent } from './posts/posts';
import { PostDetailComponent } from './post-detail/post-detail';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];