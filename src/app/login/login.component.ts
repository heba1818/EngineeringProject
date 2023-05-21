import { Component } from '@angular/core';
import { UserService } from '../signup/user.service';
import { Router } from '@angular/router';
import { User } from '../signup/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private userService: UserService, private router: Router) {}

  onEnter() {
    if (!this.email || !this.password) {
      alert("Please enter both email and password.");
      return;
    }

    // Call the login service method to check if the user exists
    const user= this.userService.getUserByEmail(this.email);

    if (user && user.password === this.password) {
      // User exists and password is correct, navigate to the appropriate page
      switch (user.selectedoption) {
        case 'seller':
          this.router.navigate(['/seller']);
          break;
        case 'buyer':
          this.router.navigate(['/buyer']);
          break;
        case 'logistic':
          this.router.navigate(['/logistic-page']);
          break;
        default:
          // Handle error case
          alert("Invalid user option.");
      }
    } else {
      // User does not exist or password is incorrect
      alert("Invalid email or password.");
    }
  }
}