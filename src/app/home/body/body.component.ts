import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body' ,
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  constructor(private router: Router, private elementRef: ElementRef) {}

 
  navigateToServ() {
    this.router.navigate(['/top-bar'], { fragment: 'serv' });
  }
  navigateToabout() {
    this.router.navigate(['/top-bar'], { fragment: 'about' });
  }

  ngOnInit() {}

  scrollToElement(): void {
    const element = this.elementRef.nativeElement.querySelector('#serv');
    element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
  }


}