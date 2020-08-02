import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck,OnInit{
    navbar:HTMLElement;
    displayNav:boolean=false;
    constructor(private route:ActivatedRoute){
     
    }
   
    ngDoCheck(){
      if(location.href==="http://localhost:4200/home"){
        this.displayNav=false;
      }else{
        this.displayNav=true;
      } 
    }
    ngOnInit(){
      this.navbar = document.getElementById("fff");

      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 62) {
          this.navbar.classList.add("fixed");
        } else {
          this.navbar.classList.remove("fixed");
        }
      });
    }
}
