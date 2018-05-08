import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { MessageService} from './message.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  //Return the products from a mocked list
  // getProducts(): Product []{
  //   return PRODUCTS;
  // };

  getProducts(): Observable<Product[]>{
    //TODO: send the message _after_ fetching the heroes. 
    this.messageService.add('Product Service: fetched heroes');
    return of(PRODUCTS);
  }

  //In the future, the RGB will read the information from the XMLS file.
  readFile(file: File) {
    var reader = new FileReader();
    reader.onload = () => {
        console.log(reader.result);
    };
    reader.readAsText(file);
  };

  constructor(private messageService: MessageService) { }

  addProduct(product: Product){
    this.messageService.add(product.name);
  }

}
