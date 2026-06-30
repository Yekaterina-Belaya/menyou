import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Recipe } from '@shared/models/recipe';
import { MatButton } from '@angular/material/button';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { RecipeCard } from '@features/recipes/components/recipe-card/recipe-card';
import { RecipeModal } from '@features/recipes/components/recipe-modal/recipe-modal';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackDialog } from '@features/recipes/components/feedback-dialog/feedback-dialog';

@Component({
  selector: 'app-recipe-grid',
  imports: [
    MatButton,
    ScrollingModule,
    RecipeCard,
  ],
  templateUrl: './recipe-grid.html',
  styleUrl: './recipe-grid.scss',
  standalone: true
})
export class RecipeGrid implements OnChanges {
  @Input({ required: true }) recipes: Recipe[] = [];
  @Input() hasMoreItems = true;

  @Output() loadMore = new EventEmitter<void>();
  @Output() recipeSelected = new EventEmitter<Recipe>();
  @Output() recipeDisliked = new EventEmitter<Recipe>();

  constructor(private dialog: MatDialog) {

  }

  chunkedRows: Recipe[][] = [];
  readonly rowHeight = 500;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['recipes']) {
      this.chunkedRows = this.chunk(this.recipes, 3);
    }
  }

  // Утилита для разбиения массива на строки по 3 элемента
  private chunk(arr: Recipe[], size: number): Recipe[][] {
    const chunked: Recipe[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunked.push(arr.slice(i, i + size));
    }
    return chunked;
  }

  onOpenDetails(recipe: Recipe): void {
    this.recipeSelected.emit(recipe);
  }

  onDislikeRecipe(recipe: Recipe): void {
    this.recipeDisliked.emit(recipe);
  }

  onLoadMoreClick(): void {
    this.loadMore.emit();
  }

  trackByRow(index: number, row: Recipe[]): string {
    return row.map(r => r.id).join('-');
  }

  openRecipeModal(recipe: Recipe): void {
    const dialogRef = this.dialog.open(RecipeModal, {
      // width: '850px',
      // maxWidth: '95vw',
      // data: { recipe: recipe },
      // panelClass: 'custom-recipe-dialog-panel' // Для глобальных скруглений оверлея, если нужно
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result?.action === 'dislike') {
        // Логика вызова окна обратной связи "Что не понравилось?"
        this.openDislikeFeedbackModal();
      }
    });
  }

  openDislikeFeedbackModal(){
    const dialogRef = this.dialog.open(FeedbackDialog)
    dialogRef.afterClosed().subscribe()
  }
}
