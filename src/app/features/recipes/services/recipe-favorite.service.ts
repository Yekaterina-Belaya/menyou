import { effect, inject, Service, signal } from '@angular/core';
import { CurrentUserService } from 'src/app/entities/user/model/current-user.service';

@Service()
export class RecipeFavoriteService {
  private readonly userService = inject(CurrentUserService)

  readonly favorites = signal<number[]>([]);
  readonly userId = signal<number | null>(null)

  constructor() {
    effect(() => {
      const user = this.userService.user();

      if (!user) {
        return;
      }

      this.userId.set(user.id);
      this.favorites.set(this.getFavorites(user.id));
    });
  }
  getFavorites(userId: number):Array<number> {
    return []
  }

  excludeFavorite(id: number){}

  addFavorite(id: number){}

  toggleFavorite(id: number): void {
    const isCurrentlyFavorite = this.favorites().includes(id);

    if (isCurrentlyFavorite) {
      this.excludeFavorite(id)
    }

    if (!isCurrentlyFavorite) {
      this.addFavorite(id)
    }

  }


}
