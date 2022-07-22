import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  constructor(private ProductService: ProductService,private cartService: CartService,) { }

  ngOnInit(): void {
    this.ProductService.getProducts().subscribe(res => {
      for (let index = 0; index < res.length; index++) {
        const product = res[index];
        product["quantity"] = 1;
      }
      this.products = res;
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

}
