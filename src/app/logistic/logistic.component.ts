import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logistic',
  templateUrl: './logistic.component.html',
  styleUrls: ['./logistic.component.css']
})
export class LogisticComponent {

  constructor(private router: Router) {}


  showMyPage = false;

goToOffers() {
  this.router.navigate(['/offers']);
  this.showMyPage = !this.showMyPage;
}

}
