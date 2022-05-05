import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  productForm: FormGroup;
  id: number;

  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    })
  }

  ngOnInit() {
  }

  private getProduct(id: number) {
    return this.productService.getProductById(id).subscribe(product => {
      this.productForm = new FormGroup({
        name: new FormControl(product.name),
      });
    });
  }

  deleteProduct(id: number){
    this.productService.deleteProduct(id).subscribe(() => {
      this.router.navigate(['/products']);
    }, e => {
      console.log(e);
    });
  }
}
