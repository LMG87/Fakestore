import { Component, inject } from '@angular/core';
import { ProductsStateService } from '@services/products-state.service';
import { CardComponent } from '@components/card/card.component';

@Component({
  selector: 'app-product-list',
  imports: [CardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductsStateService],
})
export default class ProductListComponent {
  productsStateService = inject(ProductsStateService);

  ngOninit() {
    this.changePage();
  }

  changePage() {
    this.productsStateService.changePage$.next(2);
  }
}
