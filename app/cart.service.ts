/*
A service is an instance of a class that you can make available to any part of your application using Angular's dependency injection system.
Services are the place where you share data between parts of your application.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  checkoutForm;
  //inject the HttpClient service
  constructor(private http: HttpClient) {}

  addToCart(product) {this.items.push(product);}

  getItems() {return this.items;}

  //use  HttpClient method to retrieve data.
  getShippingPrices() {return this.http.get('/assets/shipping.json');}

  clearCart() {
    this.items = [];
    return this.items;
  }
}

