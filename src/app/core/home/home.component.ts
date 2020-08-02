import { Component, OnInit } from '@angular/core';
import { DestinationService } from 'src/app/backroads/service/destination.service';
import { ListSearchDest } from 'src/app/backroads/model/listDestPagNum.model';
import { Photos } from 'src/app/backroads/model/photos.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navbar:HTMLElement;
  date:string;
  listSearchDest:ListSearchDest;
  photos:Photos[];
  constructor(private destinationService:DestinationService) { }

  ngOnInit() {
    this.navbar = document.getElementById("fff");
    this.date=new Date().getFullYear().toString();
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 61) {
        this.navbar.classList.add("fixed");
      } else {
        this.navbar.classList.remove("fixed");
      }
    });
    this.getAllDestinations();
    this.getPhotos();
  }
  smothScroll(e){    
    e.preventDefault();
    const element = document.getElementById("featured");
    let position;
    if (this.navbar.classList.contains("fixed")) {
      position = element.offsetTop - 62;
    } else {
      position = element.offsetTop - 124;
    }
    if (window.innerWidth < 992) {
      if (this.navbar.classList.contains("fixed")) {
        position = element.offsetTop - 62;
      } else {
        position = element.offsetTop - 332 - 62;
      }
    }
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth"
    });
  }
  getAllDestinations(){
    let params={
      pageNum:0,
      pageSize:6,
      sortLocation:"*",
      sortSeason:"*",
      order_by:"price"
    }
    this.destinationService.findAll(params).subscribe((response)=>{
      this.listSearchDest=response;      
    })
  }
  getPhotos(){
    this.destinationService.findPhotos().subscribe((response)=>{
      this.photos=response;            
    })
  }
}
