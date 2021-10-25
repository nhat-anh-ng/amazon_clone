import { Component, Input, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../Services/shopping-cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() products: any[] | undefined;
  constructor(
    private shopping_cart: ShoppingCartService
  ) { }

  ngOnInit(): void {
  }
  addToCart(p: any){
    this.shopping_cart.addProduct(p)
  }

}
