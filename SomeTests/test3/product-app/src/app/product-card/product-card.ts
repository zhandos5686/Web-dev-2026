import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';
import { DecimalPipe } from '@angular/common'; 

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css'],
  imports: [DecimalPipe] 
})
export class ProductCardComponent {

  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  like() {
    this.product.likes++;
  }

  remove() {
    this.delete.emit(this.product.id);
  }
}