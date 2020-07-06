import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
//@Component() decorator. indicates that the following class is a component.
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  //The @Input() decorator indicates that the property value passes in from the component's parent
  @Input() product;
  //@Output() is instance of EventEmitter().This allows the component to emit an event..
  @Output() notify = new EventEmitter();

  constructor() { }
  ngOnInit() {}
}