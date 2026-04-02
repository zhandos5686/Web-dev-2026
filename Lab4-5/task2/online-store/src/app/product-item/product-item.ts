import { Component, input, output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.html'
})
export class ProductItemComponent {

  product = input.required<Product>();
  delete = output<number>();

  like() {
    this.product().likes++;
  }

  remove() {
    this.delete.emit(this.product().id);
  }

  share() {
    window.open(`https://wa.me/?text=${this.product().link}`);
  }
}