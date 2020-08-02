import { Component, OnInit } from '@angular/core';
import { Destination } from '../model/destination.model';
import { Season } from '../model/season.model';
import { Location } from '../model/location.model';
import { DestinationService } from '../service/destination.service';
import { ListSearchDest } from '../model/listDestPagNum.model';
import { SeasonService } from '../service/season.service';
import { LocationService } from '../service/location.service';
@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  listSearchDest:ListSearchDest;
  loca:Location[];
  seas:Season[];
  sortLocation:string;
  params={
    pageNum:0,
    pageSize:9,
    sortLocation:"*",
    sortSeason:"*",
    order_by:"id"
  }
  constructor(private destinationService:DestinationService,private seasonService:SeasonService,private locationService:LocationService) {

  
  }

  ngOnInit() {
    this.resortProposal();
    this.getAllDestinations();
    this.getAllSeasons();
    this.getAllLocations();
  }
  resortProposal(){
    document.getElementById(String(0)).classList.add('active');            
  }
  activate(e){
    for(let i=0;5>i;i++){
      if(i==e.target.id){
        document.getElementById(String(i)).classList.add('active');
      }else{
        document.getElementById(String(i)).classList.remove('active');
      }
    }
    
    switch(e.target.id){
      case "0":
        this.params.sortSeason="*";
        this.getAllDestinations();
        break;
      case "1":
        this.params.sortSeason="1";
        this.getAllDestinations();
        break;
      case "2":
        this.params.sortSeason="2";
        this.getAllDestinations();
        break;
      case "3":
        this.params.sortSeason="3";
        this.getAllDestinations();
        break;
      case "4":
        this.params.sortSeason="4";
        this.getAllDestinations();
        break;
    }
   
  }
  updateCriteria(){
    this.params.sortLocation=this.sortLocation;
    this.getAllDestinations();
  }
  getAllDestinations(){
    this.destinationService.findAll(this.params).subscribe((response)=>{
      this.listSearchDest=response;      
    })
  }
  getAllSeasons(){
    this.seasonService.findAll().subscribe(response=>{
      this.seas=response;
    })
  }
  getAllLocations(){
    this.locationService.findAll().subscribe(response=>{
      this.loca=response;      
    })
  }
  onPageChange(newPage){
    console.log(newPage);
    this.params.pageNum=newPage;
    this.getAllDestinations();
  }
}
