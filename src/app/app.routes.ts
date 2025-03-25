import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'products',
    title: 'Products',
    loadChildren: () => import('./pages/products/product.routes'),
  },
  {
    path: '**',
    redirectTo: 'products',
  },
];
