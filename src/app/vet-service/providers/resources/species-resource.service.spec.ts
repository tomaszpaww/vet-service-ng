import { TestBed } from '@angular/core/testing';

import { SpeciesResourceService } from './species-resource.service';

describe('SpeciesResourceService', () => {
  let service: SpeciesResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeciesResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
