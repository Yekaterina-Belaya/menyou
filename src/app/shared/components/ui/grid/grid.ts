import { Component, computed, contentChild, input, output, TemplateRef } from '@angular/core';
import { RecipeInterface } from '@shared/models/recipe.interface';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid',
  imports: [
    CommonModule,
    ScrollingModule,
    MatButton
  ],
  templateUrl: './grid.html',
  styleUrl: './grid.scss',
  standalone: true
})
export class Grid {
  readonly data = input.required<any[]>()
  readonly pageCount = input<number>(3)
  readonly hasMoreItems = input(true);

  readonly loadMore = output<void>();

  readonly itemTemplate = contentChild.required(TemplateRef);

  readonly rowHeight = 500;

  readonly chunkedRows = computed(() => this.chunk(this.data(), this.pageCount()));

  private chunk(arr: RecipeInterface[], size: number): RecipeInterface[][] {
    const chunked: RecipeInterface[][] = [];

    for (let i = 0; i < arr.length; i += size) {
      chunked.push(arr.slice(i, i + size));
    }

    return chunked;
  }

  onLoadMoreClick(): void {
    this.loadMore.emit();
  }

  trackByRow(index: number, row: RecipeInterface[]): string {
    return row.map(r => r.id).join('-');
  }
}
