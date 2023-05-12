import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any;

  constructor(private http: HttpClient) {}

  public setUser(user: any) {
    this.user = user;
  }

  public getUser() {
    return this.user;
  }

  public saveUser(user: any) {
    return this.http.post('http://localhost/engProj/test.php', user);
  }
}
