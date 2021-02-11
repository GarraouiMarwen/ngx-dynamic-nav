import { TestBed } from '@angular/core/testing';

import { NgNavService } from './ng-nav.service';

describe('NgNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgNavService = TestBed.get(NgNavService);
    expect(service).toBeTruthy();
  });
});
