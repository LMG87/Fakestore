import { Component, inject } from '@angular/core';
import { ProductsStateService } from '@services/products-state.service';
import { CardComponent } from '@components/card/card.component';
import { CartStateService } from '@services/cart-state.service';
import { Product } from '@interfaces/product';

@Component({
  selector: 'app-product-list',
  imports: [CardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductsStateService],
})
export default class ProductListComponent {
  productsStateService = inject(ProductsStateService);
  cartState = inject(CartStateService).state;

  ngOninit() {
    this.changePage();
  }

  changePage() {
    const page = this.productsStateService.state.page() + 1;
    this.productsStateService.changePage$.next(page);
  }

  addToCart(product: Product) {
    this.cartState.add({
      product,
      quantity: 1,
    });
  }
}
