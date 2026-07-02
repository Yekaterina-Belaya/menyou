import { Component, inject, Inject } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef
} from '@angular/material/dialog';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { RecipeInterface } from '@shared/models/recipe.interface';
import { RecipeFavoriteService } from '@features/recipes/services/recipe-favorite.service';

export interface RecipeDialogData {
  recipe: RecipeInterface;
}

@Component({
  selector: 'app-recipe-modal',
  imports: [
    MatIconButton,
    MatIcon,
    MatDialogContent,
    MatDialogClose,
    MatDialogActions,
    MatButton,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem
  ],
  templateUrl: './recipe-modal.html',
  styleUrl: './recipe-modal.scss',
  standalone: true
})
export class RecipeModal {
  isFavorite = false;

  constructor(
    public dialogRef: MatDialogRef<RecipeModal>,
    private facade: RecipeFavoriteService,
    @Inject(MAT_DIALOG_DATA) public data: RecipeDialogData
  ) {}

  toggleFavorite(id: number): void {
    this.facade.toggleFavorite(id);
    this.isFavorite = !this.isFavorite;
  }

  onDislikeClick(): void {
    this.dialogRef.close({ action: 'dislike', recipe: this.data.recipe });
  }

  addToMenu(period: 'today' | 'week'): void {
    console.log(`Рецепт добавлен в меню на период: ${period}`);
    this.dialogRef.close({ action: 'addToMenu', period: period, recipe: this.data.recipe });
  }
}
