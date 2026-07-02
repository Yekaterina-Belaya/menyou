import { Component, input, output } from '@angular/core';
import { RecipeInterface } from '@shared/models/recipe.interface';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RecipeCard } from '@features/recipes/components/recipe-card/recipe-card';
import { Grid } from '@shared/components/ui/grid/grid';

@Component({
  selector: 'app-recipe-grid',
  imports: [
    ScrollingModule,
    RecipeCard,
    Grid
  ],
  templateUrl: './recipe-grid.html',
  styleUrl: './recipe-grid.scss',
  standalone: true
})
export class RecipeGrid {
  readonly recipes = input.required<RecipeInterface[]>();

  readonly recipeSelected = output<RecipeInterface>();
  readonly recipeDisliked = output<RecipeInterface>();

  onOpenDetails(recipe: RecipeInterface): void {
    this.recipeSelected.emit(recipe);
  }

  onDislikeRecipe(recipe: RecipeInterface): void {
    this.recipeDisliked.emit(recipe);
  }

}
