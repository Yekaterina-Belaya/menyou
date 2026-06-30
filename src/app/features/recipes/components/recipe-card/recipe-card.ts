import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Recipe } from '@shared/models/recipe';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardFooter } from '@angular/material/card';
import { MatDivider } from '@angular/material/list';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackDialog } from '../feedback-dialog/feedback-dialog';

@Component({
  selector: 'app-recipe-card',
  imports: [
    MatIcon,
    MatIconButton,
    MatCard,
    MatCardContent,
    MatDivider,
    MatCardFooter,
    MatButton
  ],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.scss',
  standalone: true
})
export class RecipeCard {
  @Input({ required: true }) recipe!: Recipe;
  @Input({ required: true }) userId!: number;
  @Output() openDetails = new EventEmitter<Recipe>();
  @Output() dislike = new EventEmitter<Recipe>();

  isFavorite = false;

  private dialog = inject(MatDialog);


  toggleFavorite(event: Event): void {
    event.stopPropagation(); // Чтобы не триггерить открытие модалки всего рецепта
    this.isFavorite = !this.isFavorite;
  }

  onCardClick(): void {
    this.openDetails.emit(this.recipe);
  }

  onDislike(recipeId: string) {

    this.dialog.open(FeedbackDialog, {
      // width: '500px',
      // data: {
      //   userId: this.userId
      // }
    });

  }
}
