import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = PRODUCTS;

  //creating a product hard coded
  // product : Product = {
  //   id: 1,
  //   name: 'Iluminação Som',
  //   value: 5.4
  // };

  selectedProduct: Product; 

  onSelect(product: Product): void {
   this.selectedProduct = product;
  }

  constructor() { }

  ngOnInit() {
    console.log("Test of a component logic");
    
  }

}
