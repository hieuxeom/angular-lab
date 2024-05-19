import {CommonModule} from "@angular/common";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {IProduct} from "./shared/interfaces/products";
import {NavComponent} from "./shared/nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HomeComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-lab';


}
