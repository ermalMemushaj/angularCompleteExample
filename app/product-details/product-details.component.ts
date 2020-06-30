import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  /*ActivatedRoute is specific to each routed component.It contains info about route, parameters, and other data associated with the route.
  By injecting the ActivatedRoute, you are configuring the component to use a service */
  //Inject the cart service
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }
  //subscribe to route parameters and fetch the product based on the productId
  ngOnInit() {
    this.route.paramMap.subscribe(
      params =>{this.product = products[+params.get('productId')];}
    );
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
