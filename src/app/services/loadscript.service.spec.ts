import { TestBed } from '@angular/core/testing';

import { LoadscriptService } from './loadscript.service';

describe('LoadscriptService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadscriptService = TestBed.get(LoadscriptService);
    expect(service).toBeTruthy();
  });
});
