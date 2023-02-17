import { TestBed } from '@angular/core/testing';

import { ArrayListTestService } from './array-list-test.service';

describe('ArrayListTestService', () => {
  let service: ArrayListTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArrayListTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
