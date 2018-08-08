import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  products: Product[] = [];

  add(product: Product){
    this.products.push(product);
  }

  clear(){
    this.products = [];
  }

  constructor() { }
}
