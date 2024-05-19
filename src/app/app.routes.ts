import { Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {ProductDetailsComponent} from "./features/product-details/product-details.component";
import {ProductListComponent} from "./features/product-list/product-list.component";

export const routes: Routes = [
  {
    path: "", redirectTo: "home", pathMatch: "full"
  },
  {
    path: "home", component: HomeComponent,
  },
  {
    path: "product-list", component: ProductListComponent,
  },
  {
    path: "product/:id", component: ProductDetailsComponent,
  }
];
