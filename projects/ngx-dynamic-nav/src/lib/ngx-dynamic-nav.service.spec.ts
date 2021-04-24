import { TestBed } from '@angular/core/testing';

import { NgxDynamicNavService } from './ngx-dynamic-nav.service';

describe('NgNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxDynamicNavService = TestBed.get(NgxDynamicNavService);
    expect(service).toBeTruthy();
  });
});
