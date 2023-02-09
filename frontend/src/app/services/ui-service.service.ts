import { Product } from './../Product';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showProductDetails: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleProductDetails(): void {
    this.showProductDetails = !this.showProductDetails;
    this.subject.next(this.showProductDetails);
  }

  onToggle(): Observable<any> {

      return this.subject.asObservable();
    
  }
}
