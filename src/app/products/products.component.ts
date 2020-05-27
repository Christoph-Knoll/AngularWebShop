import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../product-api.service';
import { IProduct } from '../contracts/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

//#region Fields
  products: IProduct[] = undefined

  displayedColumns = ['Id', 'Name', 'Type', 'Description', 'Price', 'Stars']
  resultsLength = 3
//#endregion

  //#region Constructor
  constructor(private productService: ProductApiService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadProducts()
  }
  //#endregion

  //#region CRUD
  async loadProducts() {
    this.products = await this.productService.getItems()
    console.log(this.products)
  }
  //#endregion

  //#region Methods
  onCreate() {
    this.router.navigate(['products/0'])
  }
  
  //#endregion

}
