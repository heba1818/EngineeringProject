import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  email!: string;
  name!: string;
  surname!: string;
  phonenumber!: string;
  coregisterno!: string;
  date!: string;
  password!: string;
  selectedoption!:string;

  constructor(private router: Router, private http: HttpClient, private userService: UserService) {}

  onEnter() {
    if (!this.email || !this.name || !this.surname || !this.phonenumber || !this.coregisterno ||
       !this.date || !this.password || !this.selectedoption) {
      alert("Please fill in all the required fields.");
      return;
    }

    const name = this.name;
    switch (this.selectedoption) {
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
    const postData = new HttpParams()
      .set('email', this.email)
      .set('name', this.name)
      .set('surname', this.surname)
      .set('phonenumber', this.phonenumber)
      .set('coregisterno', this.coregisterno)
      .set('date', this.date)
      .set('password', this.password)
      .set('selectedoption', this.selectedoption);

      this.userService.insertData(postData).subscribe(response => {
        
      });
    
  }
}