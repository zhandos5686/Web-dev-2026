import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products: Product[] = [
    // ===== Smartphones =====
    {
      id: 1,
      name: 'iPhone 15',
      description: 'Latest Apple smartphone.',
      price: 450000,
      rating: 4.8,
      likes: 0,
      categoryId: 1,
      image: 'assets/images/iphone15.jpg',
      images: ['assets/images/iphone15.jpg','assets/images/iphone15-1.jpg','assets/images/iphone15-2.jpg'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-...'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Flagship Samsung smartphone.',
      price: 420000,
      rating: 4.7,
      likes: 0,
      categoryId: 1,
      image: 'assets/images/galaxyS24.jpg',
      images: ['assets/images/galaxyS24.jpg','assets/images/galaxyS24-1.jpg','assets/images/galaxyS24-2.jpg'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-...'
    },
    // Добавь ещё 3 смартфона
    // ===== Laptops =====
    {
      id: 6,
      name: 'MacBook Air M2',
      description: 'Lightweight Apple laptop.',
      price: 550000,
      rating: 4.9,
      likes: 0,
      categoryId: 2,
      image: 'assets/images/macbookair.jpg',
      images: ['assets/images/macbookair.jpg','assets/images/macbookair-1.jpg','assets/images/macbookair-2.jpg'],
      link: 'https://kaspi.kz/shop/p/macbook-air-m2-...'
    },
    // Добавь ещё 4 ноутбука
    // ===== Headphones =====
    {
      id: 11,
      name: 'Sony WH-1000XM5',
      description: 'Premium noise-cancelling headphones.',
      price: 120000,
      rating: 4.7,
      likes: 0,
      categoryId: 3,
      image: 'assets/images/sony-headphones.jpg',
      images: ['assets/images/sony-headphones.jpg','assets/images/sony-headphones-1.jpg','assets/images/sony-headphones-2.jpg'],
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-...'
    },
    // Добавь ещё 4 наушника
    // ===== Tablets =====
    {
      id: 16,
      name: 'iPad Pro 12.9',
      description: 'Apple tablet with large display.',
      price: 650000,
      rating: 4.8,
      likes: 0,
      categoryId: 4,
      image: 'assets/images/ipadpro.jpg',
      images: ['assets/images/ipadpro.jpg','assets/images/ipadpro-1.jpg','assets/images/ipadpro-2.jpg'],
      link: 'https://kaspi.kz/shop/p/ipad-pro-12.9-...'
    },
    // Добавь ещё 4 планшета
  ];

  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}