import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  closeResult = '';
  @Input() product: Product;
  @Output() addToCart: EventEmitter<Product> = new EventEmitter();

  cartTotalNumber: any;
  constructor(private router: Router,
    private cartService: CartService,
    private ProductService: ProductService,
    private modalService: NgbModal) {
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
    if (product.quantity >= 1) {
      product.quantity += 1;
    }
  }
  decreaseQuantity(product: Product): void {
    if (product.quantity >= 2) {
      product.quantity -= 1;
    }
  }
  addItemToCart(product: Product, productModal): void {
    this.addToCart.emit(product);
    this.modalService.open(productModal, { ariaLabelledBy: 'product-added-successfully', centered: true }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  onSelect(product) {
    this.router.navigate(['/product', product.id]);
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
