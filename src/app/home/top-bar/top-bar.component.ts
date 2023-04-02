import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
  
})
export class TopBarComponent {
//   isMenuOpen = false;
  
//   toggleMenu(): void {
//     this.isMenuOpen = !this.isMenuOpen;

// }
navigateToabout() {
  this.router.navigate(['/body']);
  const element = document.getElementById('about');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
navigateToContactUs() {
  this.router.navigate(['/body']);
  const element = document.getElementById('contact-us');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
navigateToServ() {  
  this.router.navigate(['/body']);
  const element = document.getElementById('serv');
  if (element) {
    element.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'nearest' });
  }
}

constructor(private elRef: ElementRef, private router: Router) {}

showMyPage = false;

goToSignUp() {
  this.router.navigate(['/signup']);
  this.showMyPage = !this.showMyPage;
}
goToLogIn() {
  this.router.navigate(['/login']);
  
}

}