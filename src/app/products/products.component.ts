import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ProductApiService } from '../product-api.service';
import { IProduct } from '../contracts/product';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, AfterViewInit {

//#region Fields
  products$: Observable<IProduct[]>
  loaded: boolean

  displayedColumns = ['Id', 'Name', 'Type', 'Description', 'Price', 'Stars']
  resultsLength = 3
//#endregion

  //#region Constructor
  constructor(private productService: ProductApiService, private router: Router) {
  }
  
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
      this.products$ = this.productService.getItems()
      this.products$.subscribe(
        () => this.loaded = true
      )
  }

  //#endregion

  //#region Methods
  onCreate() {
    this.router.navigate(['products/0'])
  }
  
  //#endregion

}
