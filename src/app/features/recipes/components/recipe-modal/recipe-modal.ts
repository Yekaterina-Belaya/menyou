import { Component, Inject } from '@angular/core';
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
import { Recipe } from '@shared/models/recipe';

export interface RecipeDialogData {
  recipe: Recipe;
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
    @Inject(MAT_DIALOG_DATA) public data: RecipeDialogData
  ) {}

  toggleFavorite(): void {
    this.isFavorite = !this.isFavorite;
  }

  onDislikeClick(): void {
    // Закрываем модалку рецепта и передаем статус 'dislike',
    // чтобы родительский компонент открыл вторую модалку отзывов
    this.dialogRef.close({ action: 'dislike', recipe: this.data.recipe });
  }

  addToMenu(period: 'today' | 'week'): void {
    console.log(`Рецепт добавлен в меню на период: ${period}`);
    // Здесь будет вызов метода вашего MenuService
    this.dialogRef.close({ action: 'addToMenu', period: period, recipe: this.data.recipe });
  }
}
