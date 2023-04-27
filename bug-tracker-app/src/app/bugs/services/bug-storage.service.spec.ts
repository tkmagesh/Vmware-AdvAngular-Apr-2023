import { TestBed } from '@angular/core/testing';

import { BugStorageService } from './bug-storage.service';

describe('BugStorageService', () => {
  let service: BugStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BugStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
