import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  //creating a product hard coded
  product : Product = {
    id: 1,
    name: 'Iluminação Som',
    value: 5.4
  };

  constructor() { }

  ngOnInit() {
    console.log("Test of a component logic");
    
  }

}
