import { Component, input } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {

  product = input.required<Product>();

  shareWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent(
      'Check this product: ' + this.product().link
    )}`;
    window.open(url, '_blank');
  }

  shareTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(
      this.product().link
    )}&text=${encodeURIComponent(this.product().name)}`;
    window.open(url, '_blank');
  }
}