import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import Product from '../product';

@Component({
  selector: 'app-product-get',
  templateUrl: './product-get.component.html',
  styleUrls: ['./product-get.component.css']
})
export class ProductGetComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService) { }

  getProducts() {
    return this.productService.getProducts();
  }
  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    // const index = this.products.findIndex(prod => prod.id === +id);
    // this.products.splice(index, 1);
  }
  ngOnInit() {
    this.products = this.getProducts();
  }

}
