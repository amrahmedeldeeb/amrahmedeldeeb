import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  constructor(private cartService: CartService, private ProductService: ProductService) {
    this.product = {
      id: 1,
      name: "",
      price: 1,
      url: "",
      description: "",
      quantity: 1
    }
  }

  ngOnInit(): void {
  }

  increaseQuantity(product: Product): void {
    product.quantity += 1;
  }
  decreaseQuantity(product: Product): void {
    product.quantity -= 1;
  }
  addToCart(product): void {
    this.cartService.addToCart(product);
    alert("added");
  }
}
