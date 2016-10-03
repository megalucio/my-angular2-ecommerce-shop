import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'products',
  styleUrls: ['./products.css'],
  templateUrl: './products.html',
  providers: [ProductService]
})
export class Products {

  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService) { }

getProducts(): void {
    this.productService.getProducts().then(products => this.products = products);
  }
  ngOnInit(): void {
    this.getProducts();
  }
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

}
