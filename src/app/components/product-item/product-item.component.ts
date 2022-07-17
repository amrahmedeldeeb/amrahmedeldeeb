import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  constructor() {
    this.product = {
      id: 1,
      name: "",
      price: 1,
      url: "",
      description: "",
    }
  }

  ngOnInit(): void {
  }

}
