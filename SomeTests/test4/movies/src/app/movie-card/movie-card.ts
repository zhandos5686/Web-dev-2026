import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Movie} from '../movie.model'

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrls: ['./movie-card.css'],
})
export class MovieCardComponent {
  @Input() movie!: Movie;
  @Output() delete = new EventEmitter<number>();
  vote(){
    this.movie.votes++;
  }
  remove(){
    this.delete.emit(this.movie.id);
  }

}
