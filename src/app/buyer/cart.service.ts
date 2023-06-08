  import { Injectable } from '@angular/core';
  import { Product } from '../seller/add-product/product';
  import { BehaviorSubject } from 'rxjs';


  @Injectable({
    providedIn: 'root'
  })

  export class CartService {
    private storageKey = 'cartItems';
    private confirmedOrders: Product[] = [];
    private confirmedOrdersKey = 'confirmedOrders';
    private confirmed : Product[] = [];
    private confirmedkey = "confirmedOrders";
    


    constructor() {
      const confirmedOrdersString = localStorage.getItem(this.confirmedOrdersKey);
      this.confirmedOrders = confirmedOrdersString ? JSON.parse(confirmedOrdersString) : [];
    }
  
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
  
    addConfirmedOrder(product: Product) {
      this.confirmedOrders.push(product);
      localStorage.setItem(this.confirmedOrdersKey, JSON.stringify(this.confirmedOrders));
    }
    addConfirmed(product: Product) {
      this.confirmed.push(product);
      localStorage.setItem(this.confirmedkey, JSON.stringify(this.confirmed));  // Store in localStorage
    }
    
    
    getConfirmed() {
      return this.confirmed;  // Return this.confirmed
    }
  
    getConfirmedOrders() {
      return this.confirmedOrders;
    }
    removeConfirmedOrder(offer: Product) {
      const index = this.confirmedOrders.indexOf(offer);
      if (index !== -1) {
        this.confirmedOrders.splice(index, 1);
        localStorage.setItem(this.confirmedOrdersKey, JSON.stringify(this.confirmedOrders));
      }
    }
    removeFromCart(product: Product) {
      const items = this.getItemsFromStorage();
      const index = items.indexOf(product);
      if (index !== -1) {
        items.splice(index, 1);
        this.setItemsToStorage(items);
      }
    }
    
    
  }