import { Routes } from '@angular/router';

export default [
  {
    path: '',
    title: 'Cart-details',
    loadComponent: () => import('./cart.component'),
  },
] as Routes;
