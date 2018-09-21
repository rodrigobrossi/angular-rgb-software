import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Observable<Product[]> {
    this.messageService.add('ProductService: fetched products');
    return of(PRODUCTS);
  }

  readFile(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      console.log(reader.result);
    };
    reader.readAsText(file);
  }

  constructor(private messageService: MessageService) {}

  addProduct(product: Product) {
    this.messageService.add(product);
  }

  getProduct(id: number): Observable<Product> {
    // TODO: send the message _after_ fetching the product
    this.messageService.add(`ProductService: fetched product id=${id}`);
    return of(PRODUCTS.find(product => product.id === id));
  }
}
