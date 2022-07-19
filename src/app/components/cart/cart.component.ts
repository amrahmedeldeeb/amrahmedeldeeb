import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from '../../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productList = [];
  cartTotal: any = 0;
  // checkout form
  fullName: string = "";
  address: string = "";
  cardNumber: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.productList = this.cartService.getCart() || [];
    this.productList.forEach(product => {
      this.cartTotal += product.price * product.quantity;
    });
  }
  clearCart(): void {
    this.cartService.clearCart();
    this.productList = [];
    alert("cleared");
  }

  increaseQuantity(product: Product): void {
    product.quantity += 1;
    this.totalCalculation(product.price, '+');
  }
  decreaseQuantity(product: Product): void {
    product.quantity -= 1;
    this.totalCalculation(product.price, '-');
  }

  totalCalculation(price, type) {
    if (type === '+') {
      this.cartTotal += price;
    } else {
      this.cartTotal -= price;
    }

  }


}
