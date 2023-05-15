import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'api/products'; // URL to web api
  private addProductUrl = 'http://localhost/engProj/save_product.php'; // URL to PHP file for adding products

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }

  addProduct(product: Product): Observable<Product> {
    const formData: FormData = new FormData();
    formData.append('name', product.name);
    formData.append('description', product.description);
    formData.append('amount', product.amount);
    formData.append('price', product.price.toString());
    formData.append('datePublished', product.datePublished.toString());
    formData.append('quality', product.quality);
    formData.append('quantity', product.quantity.toString());
    formData.append('image', product.image);

    return this.http.post<Product>(this.addProductUrl, formData);
  }
}