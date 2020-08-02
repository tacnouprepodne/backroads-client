import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'backroads-join-as',
  templateUrl: './join-as.component.html',
  styleUrls: ['./join-as.component.css']
})
export class JoinAsComponent implements OnInit {
  register:boolean=true;
  constructor() { }

  ngOnInit() {
    this.onLoadActivate();
  }
  activate(e){
    for(let i=0;2>i;i++){
      if(i==e.target.id){
        document.getElementById(String(i)).classList.add('active');
      }else{
        document.getElementById(String(i)).classList.remove('active');
      }
    }
    switch(e.target.id){
      case "0":
        this.register=true;
        break;
      case "1":
        this.register=false;
        break;
    
    }
  }
  onLoadActivate(){
    document.getElementById(String(0)).classList.add('active');            
  }
}
