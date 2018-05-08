import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Product } from './product'
=======
>>>>>>> 291eaf2... Add message cache

@Injectable({
  providedIn: 'root'
})
export class MessageService {

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

  add(message: string){
    this.messages.push(message);
  }

  clear(){
    this.messages = [];
  }
>>>>>>> 291eaf2... Add message cache
  constructor() { }
}
