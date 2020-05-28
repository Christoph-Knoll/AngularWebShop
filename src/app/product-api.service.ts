import { Injectable } from '@angular/core';
import { GenericApiService } from './generics/generic-api.service';
import { IProduct } from './contracts/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService extends GenericApiService<IProduct>{
  urlRoot = "http://localhost:3400/products" 

  constructor(protected httpClient: HttpClient){
    super(httpClient)

  }
}
