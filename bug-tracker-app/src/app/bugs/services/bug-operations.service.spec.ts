import { TestBed } from '@angular/core/testing';

import { BugOperationsService } from './bug-operations.service';

describe('BugOperationsService', () => {
  let service: BugOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BugOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
