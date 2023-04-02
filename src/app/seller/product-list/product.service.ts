import { Injectable } from '@angular/core';
import { Product } from '../add-product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[];

  constructor() {
    this.products = JSON.parse(localStorage.getItem('products') || '[]');
  }

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    this.products.push(product);
    localStorage.setItem('products', JSON.stringify(this.products));
  }
}
