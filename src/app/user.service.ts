import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'http://localhost/engProj/test.php';

  constructor(private http: HttpClient) { }

  insertData(data: any) {
    return this.http.post(this.url, data);
  }
}
