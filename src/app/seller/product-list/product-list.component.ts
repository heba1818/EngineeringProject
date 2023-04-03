import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../add-product/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];


  constructor(private productService: ProductService,private router:Router ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  removeProduct(product: Product): void {
    this.productService.removeProduct(product);
  }
  showMyPage = false;

  goToAddProduct() {
    this.router.navigate(['/addproduct']);
    this.showMyPage = !this.showMyPage;
  }

  goToWelcome() {
    this.router.navigate(['/seller']);
    this.showMyPage = !this.showMyPage;
  }


}
