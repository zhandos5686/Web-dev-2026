import { Component, input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {

  products = input.required<Product[]>();   

  visibleProducts: Product[] = [];   

  ngOnInit() {
    this.visibleProducts = [...this.products()];
  }

  deleteProduct(id: number) {
    this.visibleProducts = this.visibleProducts.filter(p => p.id !== id);
  }
}