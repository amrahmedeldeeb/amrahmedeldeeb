import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productList: any[] = [];

  constructor() { }

  getCart() {
    return this.productList;
  }

  addToCart(product) {
    const index  = this.productList.findIndex((p:any)=>p.id == product.id);
    if(index  > -1){
      this.productList[index].quantity++;
    }else{
      this.productList.push(product);
    }
    return this.productList;

  }

  clearCart() {
    this.productList = [];
    return this.productList;
  }
}
