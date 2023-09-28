import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard'; // Import AuthGuard class
import { HttpClientModule } from '@angular/common/http';

describe('AuthGuard', () => { // Use 'AuthGuard' instead of 'authGuard'
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    guard = TestBed.inject(AuthGuard); // Create an instance of AuthGuard
  });

  fit('Frontend_should_be_create_AuthGuard', () => {
    expect(guard).toBeTruthy();
  });
});
