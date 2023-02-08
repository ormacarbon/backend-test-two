import { Product } from './../Product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class ProductService {
  private apiUrl = 'http://localhost:3003/';
  constructor(private http: HttpClient) {}

  getUserActivity():Observable<Product[]>{
    const url = `${this.apiUrl}get-products`;
    return this.http.get<Product[]>(url)
  }
}
