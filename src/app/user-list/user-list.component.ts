import { Component, OnInit } from '@angular/core';
import { UserService } from '../signup/user.service';
import { User } from '../signup/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  removeUser(user: User): void {
    this.userService.removeUser(user);
  }

  showAddUserPage = false;

  goToAddUser() {
    this.router.navigate(['/signup']);
    this.showAddUserPage = !this.showAddUserPage;
  }

  goToWelcome() {
    this.router.navigate(['/main']);
    this.showAddUserPage = !this.showAddUserPage;
  }
}
