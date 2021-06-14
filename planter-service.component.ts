import { PlanterDetails } from './../planter-details/planter-details.component';
import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlanterService {

  constructor() { }

  imageRootPath:string = 'assets/planterimages/';

  // include code to hit springboot endpoints {}
  getAllPlanters():PlanterDetails[]
  {
    let p1 : PlanterDetails = {
      planterId : 1,
      planterCost : 150,
      drainageHoles: 2,
      shape: 'rectangle',
      rating: 4,
      deliveryDate: new Date(),
      imageName: this.imageRootPath+'p1.jpg'
    }
    
    let p2 : PlanterDetails = {
      planterId : 2,
      planterCost : 800,
      drainageHoles: 2,
      shape: 'round',
      rating: 3,
      deliveryDate: new Date(),
      imageName: this.imageRootPath+'p2.jpg'
    }

    return [p1, p2];
  }//end of getAll Products from Server

}//end of service class
