import { Component, inject, Input, input, output, signal } from '@angular/core';
import { RecipeInterface } from '@shared/models/recipe.interface';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardFooter } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackDialog } from '../feedback-dialog/feedback-dialog';
import { RecipeModal } from '@features/recipes/components/recipe-modal/recipe-modal';
import { RecipeFavoriteService } from '@features/recipes/services/recipe-favorite.service';

@Component({
  selector: 'app-recipe-card',
  imports: [
    MatIcon,
    MatIconButton,
    MatCard,
    MatCardContent,
    MatCardFooter,
    MatButton
  ],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.scss',
  standalone: true
})
export class RecipeCard {
  recipe = input.required<RecipeInterface>();
  userId = input.required<number>();
  dislike = output<RecipeInterface>()

  isFavorite = false;

  private favoritesFacade = inject(RecipeFavoriteService)
  private dialog = inject(MatDialog);

  openRecipeModal(recipe: RecipeInterface): void {
    const dialogRef = this.dialog.open(RecipeModal, {
      width: '850px',
      maxWidth: '95vw',
      data: { recipe: recipe },
      panelClass: 'custom-recipe-dialog-panel'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.action === 'dislike') {
        this.openDislikeFeedbackModal();
      }
    });
  }

  openDislikeFeedbackModal(){
    const dialogRef = this.dialog.open(FeedbackDialog)
    dialogRef.afterClosed().subscribe()
  }

  onDislike(recipeId: string) {
    this.dialog.open(FeedbackDialog, {
      width: '500px',
      data: {
        userId: this.userId,
        recipeId: recipeId
      }
    });
  }

  toggleFavorite(id: number) {
    this.favoritesFacade.toggleFavorite(id)
  }
}
