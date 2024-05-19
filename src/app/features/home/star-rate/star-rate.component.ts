import {CommonModule} from "@angular/common";
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-star-rate',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './star-rate.component.html',
  styleUrl: './star-rate.component.css'
})
export class StarRateComponent {
  @Input() starRate: number = 0;
  @Output() onClick = new EventEmitter();
  handleOnClick() {
    return this.onClick.emit(this.starRate)
  }

  showStar() {
    return alert(this.starRate)
  }
}
