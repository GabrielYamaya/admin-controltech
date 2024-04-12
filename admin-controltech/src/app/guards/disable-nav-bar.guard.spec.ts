import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { disableNavBarGuard } from './disable-nav-bar.guard';

describe('disableNavBarGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => disableNavBarGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
