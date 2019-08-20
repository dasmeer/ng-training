import { TestBed } from '@angular/core/testing';

import { RemoverService } from './remover.service';

describe('RemoverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoverService = TestBed.get(RemoverService);
    expect(service).toBeTruthy();
  });
});
