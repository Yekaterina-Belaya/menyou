import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeFeedbackRequest } from '@shared/models/recipe-feedback.-request.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private http = inject(HttpClient);

  saveFeedback(body: RecipeFeedbackRequest): Observable<void> {
    return this.http.post<void>('/api/users/preferences', body);
  }

}
