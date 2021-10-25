import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { ShoppingCartService } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public shoppingCart: ShoppingCartService,
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
  }

  signOut(){
    this.auth.logOut()
  }

}
