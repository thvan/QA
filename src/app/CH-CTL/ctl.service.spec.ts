import { TestBed } from '@angular/core/testing';

import { CTLService } from './ctl.service';

describe('CTLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CTLService = TestBed.get(CTLService);
    expect(service).toBeTruthy();
  });
});
