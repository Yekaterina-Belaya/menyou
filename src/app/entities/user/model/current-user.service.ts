import { inject, Service, signal } from '@angular/core';
import { UserApiService } from 'src/app/entities/user/api/user-api.service';
import { UserInterface } from '@shared/models/user.interface';

@Service()
export class CurrentUserService {
  api = inject(UserApiService)

  user = signal<UserInterface>(null)

  constructor() {
    this.api.getCurrentUser().subscribe((data) => {
      this.user.set(data)
    })
  }
}
