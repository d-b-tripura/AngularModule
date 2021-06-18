import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductDetails } from './product-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor(private http:HttpClient){ }

  //product:ProductDetails;

  

  laptopList:ProductDetails[]=[];
  cameraList:ProductDetails[]=[];
  mobileList:ProductDetails[]=[];
  //list:ProductDetails[] = [];

  addProduct(product:ProductDetails){
    if(product.productCategory == 'Laptop'){
      this.laptopList.push(product);
      console.log(this.laptopList.length);
    }
    else if(product.productCategory == 'Camera'){
      this.cameraList.push(product);
      console.log(this.cameraList.length);
    }
    else {
      this.mobileList.push(product);
      console.log(this.mobileList.length);
    }
   // this.list.push(product);
    //console.log(this.list.length);
  }
/*
  viewProduct(productname:String) {
    for(let p of this.list) {
      if(p.productName == productname) {
        //return this.p;
      }
    }
  }*/
  
  getAllLaptops():ProductDetails[]{
    console.log("inside service laptop"+this.laptopList.length);
    return this.laptopList;
  }

  private address = 'http://localhost:9003';
  private getAllLaptop_endpoint = this.address+'/api/laptops';

  getAllLaptopList():Observable<ProductDetails[]>
  {
    //console.log('Product Service Laptop- Get Instructor called ');
    return this.http.get<ProductDetails[]>(`${this.getAllLaptop_endpoint}`);
  }

  getAllCameras():ProductDetails[]{
    console.log("inside service camera"+this.cameraList.length);
    return this.cameraList;
  }

  getAllMobiles():ProductDetails[]{
    console.log("inside service mobile"+this.mobileList.length);
    return this.mobileList;
  }
}