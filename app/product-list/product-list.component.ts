import { Component } from '@angular/core';
//import data from file
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  //class methods
  share() {window.alert('The product has been shared!');}
  //father component acts when the child raises an event
  onNotify() {window.alert('You will be notified when the product goes on sale');}
}