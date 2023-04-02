import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from './product';
import { ProductService } from '../product-list/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  product: Product = new Product('', '', '', 0, new Date(), '', '');

  @Output() addProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private productService: ProductService) {}

  onSubmit(event: Event) {
    event.preventDefault(); // prevent default form submission behavior
    this.productService.addProduct(this.product); // add the new product to the product list
    this.addProduct.emit(this.product); // emit the addProduct event with the new product
    this.product = new Product('', '','', 0, new Date(), '', ''); // reset the form
    
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
  
}