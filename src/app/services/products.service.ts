import { Injectable } from '@angular/core';
import { BaseHttpService } from './base-http.service';
import { Observable } from 'rxjs';
import { Product } from '@interfaces/product';

const LIMIT = 8;

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends BaseHttpService {
  getProducts(page: number): Observable<Product[]> {
    return this.http.get<any>(`${this.apiUrl}/products`, {
      params: { limit: page * LIMIT },
    });
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<any>(`${this.apiUrl}/products/${id}`);
  }
}
