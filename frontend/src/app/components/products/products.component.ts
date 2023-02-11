import { Subscription } from 'rxjs';
import { Product } from './../../Product';
import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  object: any;
  products: Product[] = [];
  showAddProduct: boolean = false;
  subscription: Subscription;
  product: Product;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService.getAllProducts().subscribe((products) => {
      this.object = products;
      this.products = this.object.products;
    });
  }
  addProduct(prod: Product) {
    this.productService.addProduct(prod).subscribe((prod) => {
      this.products.push(prod);
      this.getAll();
    });
  }

  updateProduct(prod: Product) {
    this.productService.updateProduct(prod).subscribe((p) => {
      this.product = p;
    });
    console.log('update');
  }

  deleteProduct(prod: Product) {
    this.productService
      .deleteProduct(prod)
      .subscribe(
        () => (this.products = this.products.filter((p) => p._id !== prod._id))
      );
  }

  productDetails(prod: Product) {
    this.productService.getProductById(prod).subscribe((p) => {
      this.product = p.product;
    });
  }
  hideProductDetails(prod: Product) {
    this.productService.getProductById(prod).subscribe((p) => {
      this.product = p.product;
    });
  }
}
