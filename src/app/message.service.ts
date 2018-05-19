import { Injectable } from '@angular/core';
import { Product } from './product'

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: Product[] = [];

  add(product: Product){
    this.messages.push(product);
  }

  clear(){
    this.messages = [];
  }
  constructor() { }
}
