import { Injectable } from '@angular/core';
import { HttpClient, HttpParams ,HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs';
import { Observable , of  } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userUrl = 'api/signup';
  private url = 'http://localhost/engProj/test.php';
  private url2 = 'http://localhost/engProj';
  private url3 = 'http://localhost/engProj/getUserRole.php';
  private loginUrl = 'http://localhost/engProj/login.php';

  private users: User[];

  constructor(private http: HttpClient) {
    this.users = JSON.parse(localStorage.getItem('users') || '[]');

   }

   
  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
  }


  login(email: string, password: string): Observable<User | undefined> {
    const user = this.users.find(u => u.email === email && u.password === password);

    if (user) {
      return of(user); // Return the matched user as an Observable
    } else {
      return of(undefined); // Return undefined if no matching user is found
    }
  }

  getUserByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  removeUser(user: User) {
    const index = this.users.indexOf(user);
    if (index >= 0) {
      this.users.splice(index, 1);
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

  // getUsers(): Observable<User[]> {
  //   return this.http.get<User[]>(this.userUrl);
  // }

  // addUser(user: User): Observable<User> {
  //   const formData: FormData = new FormData();
  //   formData.append('email', user.email);
  //   formData.append('name', user.name);
  //   formData.append('surname', user.surname);
  //   formData.append('phonenumber', user.phonenumber.toString());
  //   formData.append('coregisterno', user.coregisterno);
  //   formData.append('date', user.date.toString());
  //   formData.append('password', user.password);
  //   formData.append('selectedoption', user.selectedoption.toString());

  //   return this.http.post<User>(this.userUrl, formData);
  // }

  insertData(data: any) {
    return this.http.post(this.url, data);
  }



  private userList: User[] = [];

  saveUser(user: User) {
    this.userList.push(user);
  }

  getUserList() {
    return this.userList;
  }

  // login(email: string, password: string): Observable<any> {
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   const body = JSON.stringify({ email, password });

  //   return this.http.post(this.loginUrl, body, { headers });
  // }
  // login(email: string, password: string) {
  //   const url4 = 'http://localhost/engProj/login.php';
  //   const body = { email: email, password: password };

  //   return this.http.post(url4, body);
  // }

  getUserRole(email: string) {
    const data = { email };
    return this.http.post(this.url3, data, { responseType: 'text' });
  }

  getUserById(userId: number): Observable<any> {
    const params = new HttpParams().set('userId', userId.toString());
    return this.http.get<any>(`${this.url2}/getUser.php`, { params });
  }
}
