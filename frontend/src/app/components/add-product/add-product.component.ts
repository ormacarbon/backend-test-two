import { Product } from './../../Product';
import { UiService } from './../../services/ui-service.service';
import { Subscription } from 'rxjs';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  @Output() onAddProduct: EventEmitter<Product> = new EventEmitter();
  abv?: number;
  address?: string;
  category?: string;
  city?: string;
  coordinates?: [number, number];
  country: string;
  description?: string;
  ibu?: number;
  name?: string;
  state?: string;
  website?: string;
  showAddProduct: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddProduct = value));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if (!this.name || !this.abv || !this.country || !this.ibu) {
      alert('Please add the properties of name, abv, country and ibu');
    }

    const newProduct: Product = {
      abv: this.abv,
      address: this.address,
      category: this.category,
      city: this.city,
      coordinates: this.coordinates,
      country: this.country,
      description: this.description,
      ibu: this.ibu,
      name: this.name,
      state: this.state,
      website: this.website,
    };

    this.onAddProduct.emit(newProduct);

    this.abv = undefined;
    this.address = '';
    this.category = '';
    this.city = '';
    this.coordinates = undefined;;
    this.country = '';
    this.description = '';
    this.ibu = undefined;;
    this.name = '';
    this.state = '';
    this.website = '';
     
    this.uiService.toggleAddProduct();
  }
}
