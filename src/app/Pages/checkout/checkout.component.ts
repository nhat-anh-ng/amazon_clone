import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  items: any[] | undefined;
  constructor(
    public shopping_cart: ShoppingCartService,
  ) { }

  ngOnInit(): void {
    this.getShoppingCart()
  }

  getShoppingCart(){
    this.items = this.shopping_cart.get_shopping_cart_items()
  }

  deleteEventHandler(){
    this.getShoppingCart()
  }
}
