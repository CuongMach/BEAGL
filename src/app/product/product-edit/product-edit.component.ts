import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = {};

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = +paramMap.get('id');
      this.getProduct(id);
    });
  };

  editProduct(id: number) {
    const product = this.productForm.value;
    this.productService.editProduct(id,product).subscribe(() =>{
      alert("Cập nhật thành công");
    }, e => {
      console.log(e);
    });
  }

  getProduct(id: number){
    this.productService.getProductById(id).subscribe(product => {
     this.product = product;
     return this.productForm.get('id').setValue(this.product.id),
       this.productForm.get('name').setValue(this.product.name),
       this.productForm.get('price').setValue(this.product.price),
       this.productForm.get('description').setValue(this.product.description)
      });

  }

  ngOnInit() {
  }

}
