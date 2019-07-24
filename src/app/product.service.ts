import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import Product from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  uri = 'localhost:4000';
  private products: Product[] = [
    {
    id: 1,
    productName: 'Mobile',
    productDescription: 'this is a test description',
    productPrice: 123,
    },
    {
      id: 2,
      productName: 'Watch',
      productDescription: 'this is a test description',
      productPrice: 456,
    },
    {
      id: 3,
      productName: 'Laptop',
      productDescription: 'this is a test description',
      productPrice: 1,
    }];
  private counter = 4;

  constructor(private http: HttpClient) { }

  addProduct(productName: string, productDescription: string, productPrice: number) {
    const product: Product = {
      id: this.counter,
      productName,
      productDescription,
      productPrice
    };
    this.products.push(product);
    this.counter++;
    // this.http.post(`${this.uri}/add`, obj)
    //   .subscribe(res => console.log('Done'));
  }

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    const index = this.products.findIndex(prod => prod.id === +id);
    return this.products[index];
  }


  updateProduct(productName: string, productDescription: string, productPrice: number, id: number) {
    const obj: Product = {
      id,
      productPrice,
      productDescription,
      productName
    };
    const index = this.products.findIndex(prod => prod.id === +id);
    return this.products[index] = obj;
  }

  deleteProduct(id: number) {
    console.log(id)
    const index = this.products.findIndex(prod => prod.id === +id);
    console.log(index)
    this.products.splice(index, 1);
  }
}
