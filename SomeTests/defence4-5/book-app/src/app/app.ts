import { Component, signal } from '@angular/core';
import { Book } from './book.model';
import { BookCardComponent } from '../app/book-card/book-card';

@Component({
  selector: 'app-root',
  imports: [BookCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  title = 'Book Catalog';
  books: Book[]=[
    {id: 1, title: 'Harry Potter 1', author: 'J.Rouling', isAvailable: true, favorites:0},
    {id: 2, title: 'Harry Potter 2', author: 'J.Rouling', isAvailable: false, favorites:0},
    {id: 3, title: 'Harry Potter 3', author: 'J.Rouling', isAvailable: true, favorites:0},
    {id: 4, title: 'Harry Potter 4', author: 'J.Rouling', isAvailable: false, favorites:0},
    {id: 5, title: 'Harry Potter 5', author: 'J.Rouling', isAvailable: true, favorites:0},
  ]  
   deleteBook(id: number) {
    this.books = this.books.filter(p => p.id !== id);
  }
}
