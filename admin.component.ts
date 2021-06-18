import { ProductDetails } from './../product-details';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  __productService:ProductService;
  constructor(ps:ProductService) { 
    this.__productService=ps;
  }
 
  productInput:ProductDetails = new ProductDetails('',0,'');
  
  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.productInput.productName);
    this.__productService.addProduct(this.productInput);
  }

}
