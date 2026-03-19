import { Routes } from '@angular/router';
import { TodosComponent } from './todos-component/todos-component';
import { TodoDetailComponent } from './todo-detail-component/todo-detail-component';
import { HomeComponent } from './home-component/home-component';

export const routes: Routes = [

  { path: '/home', component: HomeComponent },
  { path: '/todos', component: TodosComponent },
  { path: '/todos/:id', component: TodoDetailComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' }

];
