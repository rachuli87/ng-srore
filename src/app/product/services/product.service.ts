import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of, Subject } from 'rxjs';
import { Routes } from 'src/app/core/http/API';
import { StorageService } from 'src/app/core/services/storage.service';
import { IProduct } from 'src/app/shared/models';
import { PRODUCTS_MOCK } from './products.mock';

@Injectable({
  providedIn: 'root', //can be acssed from anywhere from the app
})
export class ProductService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  private prodactsSubjects$: Subject<IProduct[]> = new Subject();

  public getProducts$(): Observable<IProduct[]> {
    //return of(PRODUCTS_MOCK);
    this.fetchProduct();
    return this.prodactsSubjects$.asObservable();
  }

  public fetchProduct(): void {
    const existingData: IProduct[] = this.storageService.getData('prodacts');

    if (existingData) {
      this.prodactsSubjects$.next(existingData);
    } else {
      //http
      //this.http.get<IProduct[]>(Routes['allProducts']).subscribe((data) => {
      //   this.storageService.setData('products', data);
      //   this.prodactsSubjects$.next(data);
      // });
      //mock
      of(PRODUCTS_MOCK).subscribe((data) => {
        this.storageService.setData('products', data);
        this.prodactsSubjects$.next(data);
      });
    }
  }

  //ajax
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

  // public getSingleProducts$(id: string): Observable<IProduct[]> {
  //   return this.http.get<IProduct[]>(Routes['singleProduct'](id)); //like ajax
  // }
}
