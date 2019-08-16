import { TestBed } from '@angular/core/testing';

import { GuestSecurityService } from './guest-security.service';

describe('GuestSecurityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuestSecurityService = TestBed.get(GuestSecurityService);
    expect(service).toBeTruthy();
  });
});
