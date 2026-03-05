import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
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

  shareWhatsApp() {
    const url = `https://wa.me/?text=${this.product().link}`;
    window.open(url, '_blank');
  }

  shareTelegram() {
    const url = `https://t.me/share/url?url=${this.product().link}`;
    window.open(url, '_blank');
  }
}