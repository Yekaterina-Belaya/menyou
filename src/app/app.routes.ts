import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/recipes/recipe.routes')
        .then(r => r.RECIPES_ROUTES),
  },

  {
    path: '**',
    redirectTo: '',
  },
];
