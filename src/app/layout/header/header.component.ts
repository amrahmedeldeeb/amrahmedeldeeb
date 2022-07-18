import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs/';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  productList = [];
  public cartNumber: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.productList = this.cartService.getCart() || [];
     console.log(this.productList);
  }



}
