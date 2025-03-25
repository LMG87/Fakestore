import { inject, Injectable } from '@angular/core';
import { Product } from '@interfaces/product';
import { signalSlice } from 'ngxtension/signal-slice';
import { ProductsService } from './products.service';
import {
  catchError,
  map,
  Observable,
  of,
  startWith,
  Subject,
  switchMap,
} from 'rxjs';

interface State {
  product: Product | null;
  status: 'loading' | 'success' | 'error';
}

@Injectable()
export class ProductDetailStateService {
  private productsService = inject(ProductsService);

  private initialState: State = {
    product: null,
    status: 'loading' as const,
  };

  state = signalSlice({
    initialState: this.initialState,
    actionSources: {
      getById: (_state, $: Observable<string>) =>
        $.pipe(
          switchMap((id) => this.productsService.getProduct(id)),
          map((product) => ({ product, status: 'success' as const })),
          catchError(() => of({ product: null, status: 'error' as const })),
        ),
    },
  });
}
