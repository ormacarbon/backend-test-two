import { UiService } from './../../services/ui-service.service';
import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'Products List';
  showAddProduct: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddProduct = value));
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  toggleAddProduct() {
    this.uiService.toggleAddProduct();
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
