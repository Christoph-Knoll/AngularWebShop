import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from '../product-api.service';
import { IProduct } from '../contracts/product';
import { ProductType } from '../contracts/product-type'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id: number
  product: IProduct
  constructor(private route: ActivatedRoute, private router: Router , private productService: ProductApiService) { }

  productType = ProductType
  typeSelectOptions = [];


  ngOnInit(): void {
    this.route.paramMap.subscribe(map => this.id = parseInt(map.get('id'), 10))
    this.loadProduct()
    this.typeSelectOptions = Object.keys(this.productType)
  }

  async loadProduct(){
    if (this.id === 0) {
      this.product = {id: 0, name: "", type: ProductType.Smartphone, description: "", price: 0, stars: 0}
    } else {
      this.product = await this.productService.getItemById(this.id)
    }
  }

  async onSave() {
    if (this.product.id === 0) {
      await this.productService.postItem(this.product)
    } else {
      await this.productService.putItem(this.product)
    }    
    this.onCancel()
  }

  async onCancel(){
    this.router.navigate(['products'])
  }

  async onDelete() {
    await this.productService.deleteItem(this.product)
    this.onCancel()
  }
}
