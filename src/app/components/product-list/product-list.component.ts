import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  constructor(private ProductService : ProductService) { }

  ngOnInit(): void {
    this.products = this.ProductService.getProducts();
  }

}
