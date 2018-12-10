import { TestBed } from '@angular/core/testing';

import { BilderService } from './bilder.service';

describe('BilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BilderService = TestBed.get(BilderService);
    expect(service).toBeTruthy();
  });
});
