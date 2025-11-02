import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('../context/father/father.component').then(
        (m) => m.FatherComponent
      ),
  },
  {
    path: 'children',
    loadComponent: () =>
      import('../context/children/children.component').then(
        (m) => m.ChildrenComponent
      ),
  },
];
