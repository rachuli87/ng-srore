import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Routes } from 'src/app/core/http/API';
import { IProduct } from 'src/app/shared/models';
import { PRODUCTS_MOCK } from './products.mock';

@Injectable({
  providedIn: 'root', //can be acssed from anywhere from the app
})
export class ProductService {
  constructor(private http: HttpClient) {}

  public getProducts$(): Observable<IProduct[]> {
    return of(PRODUCTS_MOCK);
  }

  //   public getProducts$(): Observable<IProduct[]> {
  //   const headerDict = {
  //     'Content-Type': 'application/json',
  //     Accept:
  //     'Access-Control-Allow-Header': 'Content-Type',
  //   };
  //   const requestOptions = {
  //     Headers: new Headers(headerDict),
  //   };

  //     return this.http.get<IProduct[]>(Routes['allProducts']); //like ajax
  //   }
  // }

  public getSingleProducts$(id: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(Routes['singleProduct'](id)); //like ajax
  }
}
