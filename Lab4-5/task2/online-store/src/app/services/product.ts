import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products: Product[] = [
    // Smartphones
    {
      id: 1,
      name: 'iPhone 13',
      description: 'Apple smartphone',
      price: 400000,
      rating: 5,
      image: 'https://via.placeholder.com/150',
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Samsung S21',
      description: 'Samsung smartphone',
      price: 350000,
      rating: 4,
      image: 'https://via.placeholder.com/150',
      link: 'https://kaspi.kz',
      likes: 0,
      categoryId: 1
    },

    // 👉 ДОБАВЬ ещё до 20 (по 5 в каждую категорию)
  ];

  getCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number) {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}