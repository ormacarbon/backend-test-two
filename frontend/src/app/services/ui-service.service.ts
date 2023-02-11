import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddProduct: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleAddProduct(): void {
    this.showAddProduct = !this.showAddProduct;
    this.subject.next(this.showAddProduct);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
