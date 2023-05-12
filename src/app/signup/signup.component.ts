import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  selectedOption!:string;
  name!: string;
  surname!: string;
  email!: string;
  phonenumber!: string;
  coregisterno!: string;
  date!: string;
  password!: string;


  constructor(private router: Router, private http: HttpClient, private userService: UserService) {}

  onEnter() {
    const postData = {
      name: this.name,
      surname: this.surname,
      email: this.email,
      phonenumber: this.phonenumber,
      coregisterno: this.coregisterno,
      date: this.date,
      password: this.password,
      selectedoption: this.selectedOption
    };

    this.http.post('http://localhost/engProj/test.php', postData)
      .subscribe(response => {
        console.log(response);
        this.userService.saveUser(response);
        this.router.navigate(['/success']);
      }, error => {
        console.log(error);
      });
  }

}
