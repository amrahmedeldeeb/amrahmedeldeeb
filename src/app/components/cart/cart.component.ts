import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/Product';
import { CartService } from '../../services/cart.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productList = [];
  cartTotal: any = 0;
  // checkout form

  myform = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [Validators.required, Validators.minLength(6)]),
    cardNumber: new FormControl('', [Validators.required, Validators.minLength(16)]),
  });


  constructor(private cartService: CartService,private router: Router) { }

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






  get fullName() {
    return this.myform.get('fullName');
  }
  get address() {
    return this.myform.get('address');
  }
  get cardNumber() {
    return this.myform.get('cardNumber');
  }
  onSubmit() {
    // this.addTodo.emit(this.task);

    // if (this.task.trim() === '') {
    //   alert('Please enter a task');
    //   return;
    // }

    if (this.myform.invalid) {
      alert('Please enter a task');
      return;
    }
    this.router.navigate(['/success', this.cartTotal]);
  }

  // onSelect(product) {
  //   this.router.navigate(['/product', product.id]);
  //   // console.log(product.id);
  // }

}
