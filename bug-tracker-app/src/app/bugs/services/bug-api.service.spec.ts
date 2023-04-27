import { TestBed } from '@angular/core/testing';

import { BugApiService } from './bug-api.service';

describe('BugApiService', () => {
  let service: BugApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BugApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
