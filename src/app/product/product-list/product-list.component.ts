import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../service/product/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  getAllProduct(){
    this.productService.getAll().subscribe(product => {
      this.products = product;
    },error => {
      console.log(error);
    });
  }

  ngOnInit() {
    this.getAllProduct();
  }

}
