import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productList: object[] = [];

  constructor() { }

  getCart() {
    return this.productList;
  }

  addToCart(product) {
    this.productList.push(product);
    return this.productList;

  }


  clearCart() {
    this.productList = [];
    return this.productList;
  }
}
