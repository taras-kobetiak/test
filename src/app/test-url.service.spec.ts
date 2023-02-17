import { TestBed } from '@angular/core/testing';

import { TestUrlService } from './test-url.service';

describe('TestUrlService', () => {
  let service: TestUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
