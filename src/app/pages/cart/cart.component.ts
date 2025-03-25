import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartItemComponent } from '@components/cart-item/cart-item.component';
import { ProductItemCart } from '@interfaces/product';
import { CartStateService } from '@services/cart-state.service';

@Component({
  selector: 'app-cart',
  imports: [CartItemComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export default class CartComponent {
  state = inject(CartStateService).state;

  onRemove(id: number) {
    this.state.remove(id);
  }

  onDecrease(product: ProductItemCart) {
    this.state.update({
      product: product.product,
      quantity: product.quantity - 1,
    });
  }

  onIncrease(product: ProductItemCart) {
    this.state.update({
      product: product.product,
      quantity: product.quantity + 1,
    });
  }
}
