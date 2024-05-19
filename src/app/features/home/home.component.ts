import {CommonModule, NgForOf} from "@angular/common";
import {Component, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {IProduct} from "../../shared/interfaces/products";
import {StarRateComponent} from "../product-list/star-rate/star-rate.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    StarRateComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
