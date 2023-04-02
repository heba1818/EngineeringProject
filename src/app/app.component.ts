import { Component } from '@angular/core';
import { Product } from './seller/add-product/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EngineeringProject';
  showSignUp = false; // Add the showSignUp property

  constructor(public router: Router) {}

  toggleSignUp() {
    this.showSignUp = !this.showSignUp;
  }
  

}
