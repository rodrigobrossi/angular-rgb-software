import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
<<<<<<< HEAD
import { ProductService} from  '../product.service'
=======
>>>>>>> 291eaf2... Add message cache

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

<<<<<<< HEAD
  constructor(public  messageService: MessageService, public productService: ProductService) { }
=======
  constructor(public  messageService: MessageService) { }
>>>>>>> 291eaf2... Add message cache

  ngOnInit() {
  }

}
