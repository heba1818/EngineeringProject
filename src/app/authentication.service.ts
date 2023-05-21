import { Injectable } from '@angular/core';
import * as jwtDecode from 'jwt-decode';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService  {
 
   // constructor(private userService: UserService,private router: Router  ) {}
  
   // canActivate(
   //   route: ActivatedRouteSnapshot,
   //   state: RouterStateSnapshot): boolean {
   //   const routeurl: string = state.url;
   //   return this.isLogin(routeurl);
   // }
   // isLogin(routeurl: string) {
   //   if (this.userService.isLoggedIn()) {
   //     return true;
   //   }
   //   this.userService.redirectUrl = routeurl;
   //   this.router.navigate(['/login'], {queryParams: { returnUrl: routeurl }} );
   // }
}