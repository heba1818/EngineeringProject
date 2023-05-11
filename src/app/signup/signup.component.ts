import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent  implements OnInit{
  selectedOption!: string;

  constructor(private router: Router) {}


  ngOnInit(): void {
  }

  onEnter() {
    const name = (<HTMLInputElement>document.getElementById('name')).value;

    switch (this.selectedOption) {
      case 'seller':
        this.router.navigate(['/seller'], { queryParams: { name } });
        break;
      case 'buyer':
        this.router.navigate(['/buyer'],{ queryParams: { name } });
        break;
      case 'logistic':
        this.router.navigate(['/logistic-page']);
        break;
      default:
        // handle error case
    }
  }
  

}
