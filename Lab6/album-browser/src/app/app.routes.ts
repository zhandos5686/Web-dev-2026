import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { AlbumsComponent } from './albums/albums';
import { AlbumDetailComponent } from './album-detail/album-detail';
import { AlbumPhotosComponent } from './album-photos/album-photos';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'albums/:id/photos', component: AlbumPhotosComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }