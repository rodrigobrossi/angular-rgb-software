import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  selectedProduct: Product;

  onSelect(product: Product): void {
    this.selectedProduct = product;
    this.productService.addProduct(product);
  }

  constructor(private productService: ProductService) {}

  /**
   * Angular state machine - OnInit
   */
  ngOnInit() {
    this.getProducts();
  }

  /**
   * Returns Products from ProductServices
   * This method calls an observable to notify asynchronous the subriscribed objects.
   */
  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe(products => (this.products = products));
  }
}
