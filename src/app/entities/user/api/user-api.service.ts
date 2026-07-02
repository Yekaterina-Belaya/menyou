import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInterface } from '@shared/models/user.interface';

@Service()
export class UserApiService {
  private http = inject(HttpClient)
  getCurrentUser(): Observable<UserInterface>{
    return this.http.get<UserInterface>('/current-user')
  }
}
