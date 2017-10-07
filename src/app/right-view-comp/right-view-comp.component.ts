import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-right-view-comp',
  templateUrl: './right-view-comp.component.html',
  styleUrls: ['./right-view-comp.component.css']
})
export class RightViewCompComponent implements OnInit {
  @Input('myData') detail: {};
  value;

  constructor() { }

  ngOnInit() {
  
  if(this.detail) {
    console.log(this.detail)
  }
  }
  
}
