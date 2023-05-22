
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/seller/product-list/product.service'; 
import { Product } from 'src/app/seller/add-product/product';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit{
  
  products: Product[] = [];
 
  constructor(private productService: ProductService,private router:Router, private cartService: CartService ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  showMyPage = false;

  goToWelcome() {
    this.router.navigate(['/buyer']);
    this.showMyPage = !this.showMyPage;
  }
  goToOrderList() {
    this.router.navigate(['/listorder']);
    this.showMyPage = !this.showMyPage;
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
  // addToCart(product: Product) {
  //   // Clone the product object
  //   const productClone: Product = { ...product };
  //   // Add the cloned product to the cart
  //   this.cartService.addToCart(productClone);
  // }
  addToOrders(product: Product) {
    this.cartService.addToCart(product);
  }
}
