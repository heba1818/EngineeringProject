  import { Component,OnInit } from '@angular/core';
  import { Router } from '@angular/router';
  import { Product } from 'src/app/seller/add-product/product';
  import { CartService } from 'src/app/buyer/cart.service'; 
  import { ProductService } from 'src/app/seller/product-list/product.service';

  @Component({
    selector: 'app-offers',
    templateUrl: './offers.component.html',
    styleUrls: ['./offers.component.css']
  })
  export class OffersComponent implements OnInit {

    confirmedOrders: Product[] = [];
    confirmed : Product[] = [];


    constructor(private cartService: CartService,private router: Router,private productService:ProductService) {}


    ngOnInit(): void {
      this.confirmedOrders = this.cartService.getConfirmedOrders();
      this.confirmed = this.cartService.getConfirmed();
      this.loadConfirmedOrders();


    }

    showMyPage = false;
    loadConfirmedOrders() {
      this.confirmedOrders = this.cartService.getConfirmedOrders();
    }
    loadConfirmed() {
      this.confirmed = this.cartService.getConfirmed();
    }

    goToWelcome() {
      this.router.navigate(['/logistic']);
      this.showMyPage = !this.showMyPage;
    }
    onReject(offer: Product) {
      this.cartService.removeConfirmedOrder(offer);
      this.loadConfirmedOrders();
    }

    onAccept(offer: Product) {
      this.cartService.addConfirmed(offer);
      this.router.navigate(['/listorder'], { state: { confirmed: offer } });
      this.loadConfirmed();
    }
    
  }
