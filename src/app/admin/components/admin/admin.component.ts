import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/services/product.service';
import { IProduct } from 'src/app/shared/models';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, OnDestroy {
  public products: IProduct[] = [];

  constructor(private productService: ProductService) {}
  ngOnInit(): void {
    this.productService.getProducts$().subscribe((data) => {
      this.products = data;
    });
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}
