import { Component } from '@angular/core';
import { RecipeGrid } from '@features/recipes/components/recipe-grid/recipe-grid';
import { mockRecipes } from '@shared/mocks/recipe-list';

@Component({
  selector: 'app-recipe-list',
  imports: [
    RecipeGrid
  ],
  templateUrl: './recipe-list.html',
  styleUrl: './recipe-list.scss',
  standalone: true
})
export class RecipeList {
  protected readonly mockRecipes = mockRecipes;
}
