import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productList = [];

  // checkout form
  fullName: string = "";
  address: string = "";
  cardNumber: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.productList = this.cartService.getCart() || [];
    console.log(this.productList);
  }
  clearCart(): void {
    this.cartService.clearCart();
    this.productList = [];
    alert("cleared");
  }

}
