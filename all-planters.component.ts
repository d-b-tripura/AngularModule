import { PlanterDetails } from './../planter-details/planter-details.component';
import { PlanterService } from './../planter-service/planter-service.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-all-planters',
  templateUrl: './all-planters.component.html',
  styleUrls: ['./all-planters.component.css']
})
export class AllPlantersComponent implements OnInit {

  __planterService:PlanterService;
  unitsInCart:number = 0; 
 
  constructor(ps:PlanterService) { 
    this.__planterService = ps;
  }
 
  ngOnInit(): void {
   }

   getAllProducts():PlanterDetails[]
   {
     return this.__planterService.getAllPlanters();
   }
 
   addToCart()
   {
     this.unitsInCart++;
     console.log(this.unitsInCart);
     alert(this.unitsInCart);
   }

   getRating(n: number): Array<number>{
     return Array(n);
   }

   doShare(){
     console.log("shared");
     alert("shared");
   }
 }
