import { Component, input } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html'
})
export class ProductListComponent {

  products = input.required<Product[]>();

  deleteProduct(id: number) {
    const index = this.products().findIndex(p => p.id === id);
    if (index !== -1) {
      this.products().splice(index, 1);
    }
  }
}