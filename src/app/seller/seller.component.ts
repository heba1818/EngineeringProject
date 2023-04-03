import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit{
  name!: string;

  constructor(private route: ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

showMyPage = false;

goToAddProduct() {
  this.router.navigate(['/addproduct']);
  this.showMyPage = !this.showMyPage;
}
goToProductList() {
  this.router.navigate(['/productlist']);
  this.showMyPage = !this.showMyPage;
}

}
