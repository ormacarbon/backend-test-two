import { Product } from './../Product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3003/';
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    const url = `${this.apiUrl}get-products`;
    return this.http.get<Product[]>(url);
  }

  getProductById(product: Product): Observable<Product> {
    const url = `${this.apiUrl}get-product/${product._id}`;
    return this.http.get<Product>(url);
  }

  addProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}register`;
    return this.http.post<Product>(url, product, httpOptions);
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}update-product/${product._id}`;
    return this.http.put<Product>(url, product, httpOptions);
  }

  deleteProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}delete-product/${product._id}`;
    return this.http.delete<Product>(url);
  }
}
