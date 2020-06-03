import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from '../product-api.service';
import { IProduct } from '../contracts/product';
import { ProductType } from '../contracts/product-type'

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  id: number
  product: IProduct
  constructor(private route: ActivatedRoute, private router: Router , private productService: ProductApiService) { }
  
  

  ngOnInit(): void {
    this.route.paramMap.subscribe(map => this.id = parseInt(map.get('id'), 10))
    this.loadProduct()
  }

  async loadProduct(){
    if (this.id === 0) {
      this.product = {id: 0, name: "", type: ProductType.Smartphone, description: "", price: 0, stars: 0}
    } else {
      this.product = await this.productService.getItemById(this.id).toPromise()
    }
  }

  async onCancel(){
    this.router.navigate(['products'])
  }

  async onDelete() {
    await this.productService.deleteItem(this.product).toPromise()
    this.onCancel()
  }
}
