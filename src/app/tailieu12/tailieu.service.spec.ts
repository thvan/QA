import { TestBed } from '@angular/core/testing';

import { TailieuService } from './tailieu.service';

describe('TailieuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TailieuService = TestBed.get(TailieuService);
    expect(service).toBeTruthy();
  });
});
