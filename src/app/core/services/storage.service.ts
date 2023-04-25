import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  //save the data to storage
  public setData(key: string, value: any): void {
    const stringifiedData = JSON.stringify(value);
    localStorage.setItem(key, stringifiedData);
  }
  //will do on load
  public getData(key: string): any {
    const rowData = localStorage.getItem(key);

    if (!rowData) return;

    const data = JSON.parse(rowData);
    return data;
  }
  //on distroy
  public deleteData(key: string): void {
    localStorage.removeItem(key);
  }
}
