import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from '../product-list/product.service';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  product: Product = new Product('', '', '', 0, new Date(), '', '', 0);

  constructor(private httpClient: HttpClient, private productService: ProductService, private router: Router) {}

  onSubmit(event: Event) {
    event.preventDefault();

    this.productService.addProduct(this.product);

    const postData = new HttpParams()
      .set('name', this.product.name)
      .set('description', this.product.description)
      .set('amount', this.product.amount)
      .set('price', this.product.price.toString())
      .set('datePublished', this.product.datePublished.toString())
      .set('quality', this.product.quality)
      .set('image', this.product.image)
      .set('quantity', this.product.quantity.toString());

    this.httpClient.post('http://localhost/engProj/save_product.php', postData)
      .subscribe(
        (response) => {
          console.log(response); // Product saved successfully
        },
        (error) => {
          console.error(error); // Error saving product
        }
      );

    this.product = new Product('', '', '', 0, new Date(), '', '', 0);
  }

  products: Product[] = [];

  onAddProduct(product: Product) {
    this.products.push(product);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Do something with the image data
        console.log(reader.result);
      };
    }
  }

  goToProductList() {
    this.router.navigate(['/productlist']);
  }

  goToWelcome() {
    this.router.navigate(['/seller']);
  }
}