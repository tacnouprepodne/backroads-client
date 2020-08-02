import { Component, OnInit } from '@angular/core';
import { DestinationService } from '../../service/destination.service';
import { ActivatedRoute } from '@angular/router';
import { Destination } from '../../model/destination.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  destination:Destination;
  constructor(private route:ActivatedRoute,private destService:DestinationService) { }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get("id");
    this.destService.getById(Number(id)).subscribe(data=>this.destination=data);
    console.log(this.destination);
  }

}
