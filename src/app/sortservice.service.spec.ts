import { TestBed } from '@angular/core/testing';

import { SortserviceService } from './sortservice.service';

describe('SortserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SortserviceService = TestBed.get(SortserviceService);
    expect(service).toBeTruthy();
  });
});