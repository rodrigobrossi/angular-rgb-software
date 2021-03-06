import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { ProductService} from  '../product.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public  messageService: MessageService, public productService: ProductService) { }

  ngOnInit() {
  }

}
