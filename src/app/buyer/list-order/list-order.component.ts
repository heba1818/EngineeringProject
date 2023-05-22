import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from 'src/app/seller/add-product/product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent  implements OnInit {
  

  orders: Product[] = [];

  constructor(private cartService: CartService,private router : Router) { 
    this.orders = this.cartService.getItems();
  }

  ngOnInit(): void {
    this.orders = this.cartService.getItems();
  }
  showMyPage = false;
  goToWelcome() {
    this.router.navigate(['/buyer']);
    this.showMyPage = !this.showMyPage;
  }
  goToOffers() {
    this.router.navigate(['/listproduct']);
    this.showMyPage = !this.showMyPage;
  }
  
  addToOrders(product: Product) {
    this.cartService.addToCart(product); // Call addToOrders method from CartService
  }
}