import {Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router) {
  }

  createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required ],
      ProductDescription: ['', Validators.required ],
      ProductPrice: [null, Validators.required ]
    });
  }

  addProduct(productName: string, productDescription: string, productPrice: number) {
    this.productService.addProduct(productName, productDescription, productPrice);
    this.router.navigate(['products']);
  }

  ngOnInit() {
    this.createForm();
  }

}
