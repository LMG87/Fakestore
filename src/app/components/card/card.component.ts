import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { Product } from '@interfaces/product';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  product = input.required<Product>();
}
