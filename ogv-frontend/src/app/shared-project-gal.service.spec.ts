import { TestBed } from '@angular/core/testing';

import { SharedProjectGalService } from './shared-project-gal.service';

describe('SharedProjectGalService', () => {
  let service: SharedProjectGalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedProjectGalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
