import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {ProductService} from '../../service/product/product.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {};
  imageFile: File;
  categories: Category[] = [];

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    categoryId: new FormControl(),
    category: new FormControl(),
    image: new FormControl()
  });

  submit() {
    const category = this.productForm.value;
    this.productForm.patchValue({category: {
      id: category.categoryId,
        name:''
      }});
    const formData = new FormData();
    formData.append("name",this.productForm.value.name)
    formData.append("price",this.productForm.value.price)
    formData.append("description",this.productForm.value.description)
    formData.append("category",this.productForm.value.category.id)
    formData.append("image",this.imageFile)
    this.productService.createProduct(formData).subscribe(() => {
      alert("Thành công")
      this.router.navigate(['/products'])
    })
  }

  constructor(private productService: ProductService,
              private router: Router,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.getAllCategories();
  }

  changeFile($event) {
    this.imageFile = $event.target.files[0];
    console.log(this.imageFile);
  }

  getAllCategories() {
    this.categoryService.getAll().subscribe(categories => {
    this.categories = categories;
    console.log(this.categories);
    })
  }
}
