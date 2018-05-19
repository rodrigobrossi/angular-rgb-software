import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
<<<<<<< HEAD
<<<<<<< HEAD
import { ProductService} from  '../product.service'
=======
>>>>>>> 291eaf2... Add message cache
=======
import { ProductService} from  '../product.service'
>>>>>>> 269338c... Add Service

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

<<<<<<< HEAD
<<<<<<< HEAD
  constructor(public  messageService: MessageService, public productService: ProductService) { }
=======
  constructor(public  messageService: MessageService) { }
>>>>>>> 291eaf2... Add message cache
=======
  constructor(public  messageService: MessageService, public productService: ProductService) { }
>>>>>>> 269338c... Add Service

  ngOnInit() {
  }

}
