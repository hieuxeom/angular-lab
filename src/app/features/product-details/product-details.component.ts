import {CommonModule} from "@angular/common";
import {Component} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {IProduct} from "../../shared/interfaces/products";
import {ProductService} from "../../shared/services/product.service";
import {StarRateComponent} from "../product-list/star-rate/star-rate.component";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, StarRateComponent, RouterLink],
  providers: [ProductService],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  public productId: number | undefined;
  public productData: IProduct | undefined;
  constructor(private  productService: ProductService,private _activateRoute: ActivatedRoute) {
    this._activateRoute.paramMap.subscribe((param) => {
      this.productId = Number(param.get('id'))
      if (this.productId) {
        this.productData =this.productService.getProductById(this.productId)
      }

      console.log(this.productData)
    })


  }
}
