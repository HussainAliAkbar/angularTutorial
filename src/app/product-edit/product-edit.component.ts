import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  angForm: FormGroup;
  product: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService, private fb: FormBuilder) {

  }


    createForm() {
    this.angForm = this.fb.group({
      ProductName: ['', Validators.required ],
      ProductDescription: ['', Validators.required ],
      ProductPrice: ['', Validators.required ]
    });
  }

  updateProduct(productName: string, productDescription: string, productPrice: number) {
    this.productService.updateProduct(productName, productDescription, productPrice, this.product.id);
    this.router.navigate(['products']);
  }

  ngOnInit() {
    this.createForm();
    this.route.params.subscribe(params => {
      const res = this.productService.getProductById(params['id']);
      this.product = res;
    });
  }

}
