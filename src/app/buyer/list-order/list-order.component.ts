import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from 'src/app/seller/add-product/product';


@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent  implements OnInit {
  

  orders: Product[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.orders = this.cartService.getItems();
  }

  addToOrders(product: Product) {
    this.cartService.addToCart(product); // Call addToOrders method from CartService
  }
}