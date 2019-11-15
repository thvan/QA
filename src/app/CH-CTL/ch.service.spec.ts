import { TestBed } from '@angular/core/testing';

import { CHService } from './ch.service';

describe('CHService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CHService = TestBed.get(CHService);
    expect(service).toBeTruthy();
  });
});
