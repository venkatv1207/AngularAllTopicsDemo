import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchtermapiService {
  private url = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getdata(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
