import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  fullName: string = "";
  address: string = "";
  cardNumber: string = "";

  productList = [];
  cartTotal: any = 0;

  constructor(private cartService: CartService, private router: Router) { }

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
    if (product.quantity <= 1) {
      alert("product removed");
      this.productList = this.productList.filter(p => p.id !== product.id);
    } else {
      product.quantity -= 1;
      this.totalCalculation(product.price, '-');
    }
  }

  totalCalculation(price, type) {
    if (type === '+') {
      this.cartTotal += price;
    } else {
      this.cartTotal -= price;
    }


  }
  onSubmit(): void {
    this.router.navigate(['/success', this.cartTotal]);
  }


  onfullNameChange(change) {
    this.fullName = change;
  }
  onAddressChange(change) {
    this.address = change;
  }
  onCardNumberChange(change) {
    this.cardNumber = change;
  }

}
