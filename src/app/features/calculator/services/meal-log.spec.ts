import { TestBed } from '@angular/core/testing';

import { MealLog } from './meal-log';

describe('MealLog', () => {
  let service: MealLog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealLog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
