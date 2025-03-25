import { Routes } from '@angular/router';

export default [
  {
    path: '',
    title: 'Product-List',
    loadComponent: () => import('./product-list/product-list.component'),
  },
] as Routes;
