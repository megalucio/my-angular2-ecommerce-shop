import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

import { ProductService } from './../../services/product.service';

@Component({
  selector: 'products',
  styleUrls: ['./products.css'],
  templateUrl: './products.html',
  providers: [ProductService]
})
export class Products {

  errorMessage: string;
  products: Product[];

  constructor(private productService: ProductService) { }

getProducts(): void {
    this.productService.getProducts()
                     .subscribe(
                       data => this.products = data.response.content,
                       error =>  this.errorMessage = <any>error);
}   
                   
  ngOnInit(): void {
    this.getProducts();
  }
}
