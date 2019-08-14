import { TestBed } from '@angular/core/testing';

import { GuestListService } from './guest-list.service';

describe('GuestListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuestListService = TestBed.get(GuestListService);
    expect(service).toBeTruthy();
  });
});
