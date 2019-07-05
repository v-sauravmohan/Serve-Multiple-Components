import { TestBed } from '@angular/core/testing';

import { CombineService } from './combine.service';

describe('CombineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CombineService = TestBed.get(CombineService);
    expect(service).toBeTruthy();
  });
});
