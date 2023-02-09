import { UiService } from './../../services/ui-service.service';
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
  showProductDetails: boolean = false;
  subscription: Subscription;
  product: Product;

  constructor(
    private productService: ProductService,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products) => {
      this.object = products;
      this.products = this.object.products;
    });
  }

  deleteProduct(product: Product) {
    this.productService
      .deleteProduct(product)
      .subscribe(
        () =>
          (this.products = this.products.filter((p) => p._id !== product._id))
      );
  }

  productDetails(prod: Product) {
    this.productService.getProductById(prod).subscribe((p) => {
      this.product = p.product;
      this.uiService.toggleProductDetails();
    });
  }
  hideProductDetails(prod: Product) {
    this.productService.getProductById(prod).subscribe((p) => {
      this.product = p.product;
      this.uiService.toggleProductDetails();
    });
  }
}
