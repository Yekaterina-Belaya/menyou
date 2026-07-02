import { IngredientInterface } from '@shared/models/ingredient.interface';

export interface RecipeInterface {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  calories: number;
  proteins: number;
  fats: number;
  carbs: number;
  ingredients: IngredientInterface[],
  process: string[],
  benefits: string[]
}
