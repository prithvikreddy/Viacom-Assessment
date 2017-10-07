import { Component, OnInit } from '@angular/core';
import {DataService} from "./../services/my-service.service";

@Component({
  selector: 'app-logo-tv-comp',
  templateUrl: './logo-tv-comp.component.html',
  styleUrls: ['./logo-tv-comp.component.css']
})
export class LogoTvCompComponent implements OnInit {

  dataArray: any ; 
  index: {};
  flag: boolean = false;

  constructor(private dataService : DataService) { }

  ngOnInit() {
     this.dataService.getJsonData().subscribe((data)=>{
      
     this.dataArray=data.logotv.series;
    console.log(this.dataArray); 
    })
  }

    myFunc(i) {
    this.index = this.dataArray[i];
    this.flag = true;
    
  }

}
