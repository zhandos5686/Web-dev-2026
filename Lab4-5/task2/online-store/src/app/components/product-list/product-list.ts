import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 PRO 256GB',
      description: 'Latest Apple smartphone with powerful performance.',
      price: 450000,
      rating: 4.8,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQybhcM6LQq_UFFFBTxrq79Ic_txK1ip6VRvQ&s',
      images: [
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300'
      ],
      link: 'https://kaspi.kz'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Flagship Samsung smartphone.',
      price: 420000,
      rating: 4.6,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCVvgo-I1oPBuVtYsjTL9iYZI-9Cg9yb0j8Q&s',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzFlMr8YaxWg9h5C8fUmYy2c--J2FuKvxT3g&s',
        'https://gadgetstore.kz/wa-data/public/shop/products/38/09/938/images/2689/2689.970.webp',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJeBzOMkLCM8ScJC1wEUMV_Jljn1KjZXA_7A&s'
      ],
      link: 'https://kaspi.kz'
    },
        {
      id: 3,
      name: 'iPhone 15 128GB',
      description: 'Latest Apple smartphone with powerful performance.',
      price: 450000,
      rating: 4.8,
      image: 'https://via.placeholder.com/300',
      images: [
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300'
      ],
      link: 'https://kaspi.kz'
    },
        {
      id: 4,
      name: 'iPhone 15 128GB',
      description: 'Latest Apple smartphone with powerful performance.',
      price: 450000,
      rating: 4.8,
      image: 'https://via.placeholder.com/300',
      images: [
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300'
      ],
      link: 'https://kaspi.kz'
    },
        {
      id: 5,
      name: 'iPhone 15 128GB',
      description: 'Latest Apple smartphone with powerful performance.',
      price: 450000,
      rating: 4.8,
      image: 'https://via.placeholder.com/300',
      images: [
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300'
      ],
      link: 'https://kaspi.kz'
    },
        {
      id: 6,
      name: 'iPhone 15 128GB',
      description: 'Latest Apple smartphone with powerful performance.',
      price: 450000,
      rating: 4.8,
      image: 'https://via.placeholder.com/300',
      images: [
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300'
      ],
      link: 'https://kaspi.kz'
    },
        {
      id: 7,
      name: 'iPhone 15 128GB',
      description: 'Latest Apple smartphone with powerful performance.',
      price: 450000,
      rating: 4.8,
      image: 'https://via.placeholder.com/300',
      images: [
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300'
      ],
      link: 'https://kaspi.kz'
    },
        {
      id: 8,
      name: 'iPhone 15 128GB',
      description: 'Latest Apple smartphone with powerful performance.',
      price: 450000,
      rating: 4.8,
      image: 'https://via.placeholder.com/300',
      images: [
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300'
      ],
      link: 'https://kaspi.kz'
    },
        {
      id: 9,
      name: 'iPhone 15 128GB',
      description: 'Latest Apple smartphone with powerful performance.',
      price: 450000,
      rating: 4.8,
      image: 'https://via.placeholder.com/300',
      images: [
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300'
      ],
      link: 'https://kaspi.kz'
    },
        {
      id: 10,
      name: 'iPhone 15 128GB',
      description: 'Latest Apple smartphone with powerful performance.',
      price: 450000,
      rating: 4.8,
      image: 'https://via.placeholder.com/300',
      images: [
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300',
        'https://via.placeholder.com/300'
      ],
      link: 'https://kaspi.kz'
    }
  ];
}