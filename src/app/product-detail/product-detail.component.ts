import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})


<<<<<<< HEAD


=======
>>>>>>> 15f4388... Component Test
export class ProductDetailComponent implements OnInit {

  //Binding the product
  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
