import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'backroads-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navBtn:HTMLElement;
  links:HTMLElement;
  navbar:HTMLElement;
  constructor() {
   }

  ngOnInit() {
    
    this.navbar = document.querySelector(".navbar");
    this.navBtn = document.getElementById("nav-toggle");
    this.links = document.getElementById("nav-links");
  }
  toggle(){
      this.links.classList.toggle("show-links");
  }
  
}
