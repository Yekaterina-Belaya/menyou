import { TestBed } from '@angular/core/testing';

import { RecipeFavorite } from './recipe-favorite';

describe('RecipeFavorite', () => {
  let service: RecipeFavorite;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeFavorite);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
