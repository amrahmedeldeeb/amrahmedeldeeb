import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/Product';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.scss']
})
export class ProductItemDetailComponent implements OnInit {

  public productId;
  items;
  products:any;
  product;
  closeResult = '';
  constructor(private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private modalService: NgbModal) { }

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
        this.products = res.filter(p => p.id == this.productId)[0];
      }
      console.log(this.products);
    });

  }

  increaseQuantity(product: Product): void {
    if(product.quantity >= 1){
      product.quantity += 1;
    }
  }
  decreaseQuantity(product: Product): void {
    if(product.quantity >= 2){
      product.quantity -= 1;
    }
  }
  addToCart(product,productModal): void {
    this.cartService.addToCart(product);
    this.modalService.open(productModal, {ariaLabelledBy: 'product-added-successfully', centered: true}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
