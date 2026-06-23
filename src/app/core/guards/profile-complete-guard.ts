import { CanActivateFn } from '@angular/router';

export const profileCompleteGuard: CanActivateFn = (route, state) => {
  return true;
};
