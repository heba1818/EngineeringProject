import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost/engProj/test.php';
  private url2 = 'http://localhost/engProj/login.php';
  private url3 = 'http://localhost/engProj/getUserRole.php';

  constructor(private http: HttpClient) { }

  insertData(data: any) {
    return this.http.post(this.url, data);
  }

  login(data: any) {
    return this.http.post(this.url2, data, { responseType: 'text' }).pipe(
      map(response => {
        if (response === 'login') {
          // User is authenticated
          return true;
        } else {
          // User is not authenticated
          return false;
        }
      })
    );
  }
  getUserRole(email: string) {
    const data = { email };
    return this.http.post(this.url3, data, { responseType: 'text' });
  }
}