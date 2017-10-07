import { Component, OnInit } from '@angular/core';
import {DataService} from "./../services/my-service.service";


@Component({
  selector: 'app-mtvcomp',
  templateUrl: './mtvcomp.component.html',
  styleUrls: ['./mtvcomp.component.css']
})
export class MTVcompComponent implements OnInit {

  dataArray: any ; 
  index: {};
  flag: boolean = false;

  constructor(private dataService:DataService) { }

  ngOnInit() {

    this.dataService.getJsonData().subscribe((data)=>{
      
     this.dataArray=data.mtv.series;
    console.log(this.dataArray); 
    })
  }

  myFunc(i) {
    this.index = this.dataArray[i];
    this.flag = true;
    
  }

}
