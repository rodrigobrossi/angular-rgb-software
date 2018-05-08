import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
//import { PRODUCTS } from '../mock-products';
import { ProductService} from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  /** Removed from previous elements */
  //products = PRODUCTS;

  products: Product[]; //Injectable reference assingened to the service.

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

  constructor(private productService : ProductService) { }

  /**
   * Angular state machine - OnInit 
   */
  ngOnInit() {
    console.log("Test of a component logic");
    this.getProducts();
  }

  /**
   * Returns Products from ProductServices
   */
  getProducts(): void {
    this.products = this.productService.getProducts();
  }

}
