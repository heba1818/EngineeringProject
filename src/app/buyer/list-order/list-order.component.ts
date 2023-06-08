import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from 'src/app/seller/add-product/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit {

  orders: Product[] = [];
  confirmedOffers: Product[] = [];
  confirmedOrders: Product[]=[];
  confirmed : Product[] = [];
  

  constructor(public cartService: CartService, private router: Router) {
    this.orders = this.cartService.getItems();
    this.confirmed = this.cartService.getConfirmed();
  }
  ngOnInit(): void {
    this.confirmed = this.cartService.getConfirmed();
    // if (history.state && history.state.confirmed) {
    //   this.confirmed.push(history.state.confirmed);
    // }

    this.orders = this.cartService.getItems();
    const state = history.state;
    if (state && state.confirmedOrder) {
      this.confirmedOffers.push(state.confirmedOrder);
    }
    // Retrieve the status from local storage and update the product objects
    this.orders.forEach(product =>{

      const status = localStorage.getItem(product.name);
      if (status === 'confirmed') {
        product.isConfirmedOrder = true;
    }
       });
  }

  goToWelcome() {
    this.router.navigate(['/buyer']);
  }

  goToOffers() {
    this.router.navigate(['/listproduct']);
  }

  confirmOrder(product: Product) {
    this.cartService.addConfirmedOrder(product);
    product.isConfirmedOrder = true;
    this.confirmedOffers.push(product);
    // localStorage.setItem(product.name, 'confirmed');
    // const index = this.orders.indexOf(product);
    // if (index !== -1) {
    //   this.orders.splice(index, 1);
    // }
  }
  removeOrder(product: Product) {
    const index = this.orders.indexOf(product);
    if (index !== -1) {
      this.orders.splice(index, 1);
      this.cartService.removeFromCart(product); // Remove from cart service
      localStorage.removeItem(product.name); // Remove from local storage
    }
  }
  
  

}