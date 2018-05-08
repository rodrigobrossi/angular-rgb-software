import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  //Return the products from a mocked list
  getProducts(): Product []{
    return PRODUCTS;
  };

  //In the future, the RGB will read the information from the XMLS file.
  readFile(file: File) {
    var reader = new FileReader();
    reader.onload = () => {
        console.log(reader.result);
    };
    reader.readAsText(file);
  };

  constructor(private productService : ProductService) { }

}
