import { Injectable } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { Product } from './product'
=======
>>>>>>> 291eaf2... Add message cache
=======
import { Product } from './product'
>>>>>>> 269338c... Add Service

@Injectable({
  providedIn: 'root'
})
export class MessageService {

<<<<<<< HEAD
<<<<<<< HEAD
  products: Product[] = [];

  add(product: Product){
    this.products.push(product);
  }

  clear(){
    this.products = [];
  }
  
=======
  messages: string[] = [];
=======
  messages: Product[] = [];
>>>>>>> 269338c... Add Service

  add(product: Product){
    this.messages.push(product);
  }

  clear(){
    this.messages = [];
  }
>>>>>>> 291eaf2... Add message cache
  constructor() { }
}
