import { Component, OnInit } from '@angular/core';

export interface PlanterDetails {
  planterId : number,
  planterCost : number,
  drainageHoles:number,
  shape:string,
  rating:number,
  deliveryDate:Date,
  imageName:string
}

@Component({
  selector: 'app-planter-details',
  templateUrl: './planter-details.component.html',
  styleUrls: ['./planter-details.component.css']
})
export class PlanterDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
