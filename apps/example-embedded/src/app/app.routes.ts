import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('../context/children/children.component').then(
        (m) => m.ChildrenComponent
      ),
  },
];
