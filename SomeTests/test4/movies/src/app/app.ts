import { Component } from '@angular/core';
import { Movie } from './movie.model';
import { MovieCardComponent} from './movie-card/movie-card';

@Component({
  selector: 'app-root',
  imports: [MovieCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Movies';
  
  movies: Movie[]=[
    { id: 1, title: 'Fast and Furies', year:2011, isWatched: true, votes: 0 },
    { id: 2, title: 'Fast and Furies 1', year:2013, isWatched: false, votes: 0 },
    { id: 3, title: 'Fast and Furies 2', year:2015, isWatched: true, votes: 0 },
    { id: 4, title: 'Fast and Furies 3', year:2017, isWatched: false, votes: 0 },
    { id: 5, title: 'Fast and Furies 4', year:2019, isWatched: true, votes: 0 }
  ];
  deleteMovie(id:number){
    this.movies = this.movies.filter(movie => movie.id !== id);
  }
}
