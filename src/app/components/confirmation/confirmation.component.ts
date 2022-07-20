import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  public cartTotal;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let total = parseInt(this.route.snapshot.paramMap.get('total'));
    this.cartTotal = total;
  }

}
