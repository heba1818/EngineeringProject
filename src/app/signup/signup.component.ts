import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { User } from './user';
import { HttpClient, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  user: User = new User('','','','','',new Date(),'','');


  // email!: string;
  // name!: string;
  // surname!: string;
  // phonenumber!: string;
  // coregisterno!: string;
  // date!: string;
  // password!: string;
  // selectedoption!:string;

  constructor(private httpClient: HttpClient,private router: Router, private http: HttpClient, private userService: UserService) {}

  onEnter(event: Event) {
        event.preventDefault();

        this.userService.addUser(this.user);
    if (!this.user.email || !this.user.name || !this.user.surname || !this.user.phonenumber || !this.user.coregisterno ||
       !this.user.date || !this.user.password || !this.user.selectedoption) {
      alert("Please fill in all the required fields.");
      return;
    }

    const name = this.user.name;
    switch (this.user.selectedoption) {
      case 'seller':
        this.router.navigate(['/seller'], { queryParams: { name } });
        break;
      case 'buyer':
        this.router.navigate(['/buyer'],{ queryParams: { name } });
        break;
      case 'logistic':
        this.router.navigate(['/logistic']);
        break;
      default:
        // handle error case
    }
    const postData = new HttpParams()
      .set('email', this.user.email)
      .set('name', this.user.name)
      .set('surname', this.user.surname)
      .set('phonenumber', this.user.phonenumber)
      .set('coregisterno', this.user.coregisterno)
      .set('date', this.user.date.toString())
      .set('password', this.user.password)
      .set('selectedoption', this.user.selectedoption);

         this.httpClient.post('http://localhost/engProj/test.php', postData)
      .subscribe(
        (response) => {
          console.log(response); // Product saved successfully
        },
        (error) => {
          console.error(error); // Error saving product
        }
      );

      this.user = new User('','','','','',new Date(),'','');

   

      this.userService.insertData(postData).subscribe(response => {
        
      });
    
    }
    users : User[] = [];

    onAddUser(user: User){
      this.users.push(user);
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