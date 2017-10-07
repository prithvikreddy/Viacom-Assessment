import { Component, OnInit } from '@angular/core';
import {DataService} from "./../services/my-service.service";

@Component({
  selector: 'app-vh1-comp',
  templateUrl: './vh1-comp.component.html',
  styleUrls: ['./vh1-comp.component.css']
})
export class VH1CompComponent implements OnInit {

  dataArray: any ; 
  index: {};
  flag: boolean = false;

  constructor(private dataService : DataService) { }

  ngOnInit() {
       this.dataService.getJsonData().subscribe((data)=>{
      
     this.dataArray=data.vh1.series;
    console.log(this.dataArray); 
    })
  }

   myFunc(i) {
    this.index = this.dataArray[i];
    this.flag = true;
    
  }

}
