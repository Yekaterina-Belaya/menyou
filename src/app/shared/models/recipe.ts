export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  calories: number;
  proteins: number;
  fats: number;
  carbs: number;
}
