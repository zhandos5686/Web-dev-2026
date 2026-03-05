import { Component } from '@angular/core';
import { Product } from './product.model';
import { ProductCardComponent } from './product-card/product-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = 'Product Catalog';

  products: Product[] = [
    { id: 1, name: 'iPhone 15', price: 450000, inStock: true, likes: 0 },
    { id: 2, name: 'Samsung Galaxy S24', price: 390000, inStock: true, likes: 0 },
    { id: 3, name: 'MacBook Air M3', price: 750000, inStock: false, likes: 0 },
    { id: 4, name: 'AirPods Pro', price: 120000, inStock: true, likes: 0 },
    { id: 5, name: 'PlayStation 5', price: 320000, inStock: false, likes: 0 }
  ];

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}