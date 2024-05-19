import {CommonModule, NgForOf, NgIf, UpperCasePipe} from "@angular/common";
import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {IProduct} from "../../shared/interfaces/products";
import {ProductService} from "../../shared/services/product.service";
import {StarRateComponent} from "./star-rate/star-rate.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgForOf,
    NgIf,
    StarRateComponent,
    UpperCasePipe
  ],
  providers: [ProductService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  filterString: string = '';

  showProducts: IProduct[] = [];
  isShowImage = true;
  constructor(private productService: ProductService) {

    this.showProducts = this.productService.getAllProducts();
  }

  handleFilter() {
    // this.filterString
    if (this.filterString && this.filterString !== "") {
      this.showProducts = this.productService.getAllProducts().filter((_p) => {
        const regex = new RegExp(this.filterString.toLowerCase())
        return regex.test(_p.productName.toLowerCase())
      })
    }


  }
  handleShowStar($starRate:number) {
    return alert($starRate)
  }
}
