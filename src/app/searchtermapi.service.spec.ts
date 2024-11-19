import { TestBed } from '@angular/core/testing';

import { SearchtermapiService } from './searchtermapi.service';

describe('SearchtermapiService', () => {
  let service: SearchtermapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchtermapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
