import { UiService } from './../../services/ui-service.service';
import { Product } from './../../Product';
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product;
  @Output() onDeleteProduct: EventEmitter<Product> = new EventEmitter();
  @Output() onProductDetail: EventEmitter<Product> = new EventEmitter();
  @Output() onHideProductDetails: EventEmitter<Product> = new EventEmitter();
  showProductDetails: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {}

  onDelete(product: Product) {
    this.onDeleteProduct.emit(product);
  }

  onDetails(product: Product) {
    this.showProductDetails = true;
    this.onProductDetail.emit(product);
  }

  hideDetails(product: Product) {
    this.showProductDetails = false;
    this.onHideProductDetails.emit(product);
  }
}
