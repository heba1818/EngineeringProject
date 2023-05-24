import { Injectable } from '@angular/core';
import { Product } from '../seller/add-product/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storageKey = 'cartItems';

  constructor() { }

  addToCart(product: Product) {
    const items = this.getItemsFromStorage();
    items.push(product);
    this.setItemsToStorage(items);
  }

  getItems() {
    return this.getItemsFromStorage();
  }

  private getItemsFromStorage(): Product[] {
    const itemsString = localStorage.getItem(this.storageKey);
    return itemsString ? JSON.parse(itemsString) : [];
  }

  private setItemsToStorage(items: Product[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(items));
  }
}
