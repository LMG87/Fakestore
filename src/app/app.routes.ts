import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Products',
    loadChildren: () => import('./pages/products/product.routes'),
  },
  {
    path: 'cart',
    title: 'Cart',
    loadChildren: () => import('./pages/cart/cart.routes'),
  },
  {
    path: '**',
    redirectTo: 'Products',
  },
];
