import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/Product';
@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.scss']
})
export class ProductItemDetailComponent implements OnInit {

  public productId;
  items;
  products:any;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.productId = id;
    // this.productService.getProducts.find(x => x.id == this.productId)
     this.productService.getProducts();
    // this.productService.getProducts().subscribe(data => {

    //   console.log(data);
    // });
    this.items = this.productService.getProducts().subscribe(res => {
      for (let index = 0; index < res.length; index++) {
        const product = res[index];
        product["quantity"] = 1;
        this.products = res.filter(p => p.id == this.productId) || [];
      }
      console.log(this.products);
    });
  }

}
