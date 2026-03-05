import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-card',
  standalone: true,
  templateUrl: './book-card.html',
  styleUrls: ['./book-card.css'],
})
export class BookCardComponent {

  @Input() book!: Book;
  @Output() delete = new EventEmitter<number>();

  favorite() {
    this.book.favorites++;
  }
  remove() {
    this.delete.emit(this.book.id);
  }
}