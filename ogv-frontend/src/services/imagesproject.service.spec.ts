import { TestBed } from '@angular/core/testing';

import { ImagesprojectService } from './imagesproject.service';

describe('ImagesprojectService', () => {
  let service: ImagesprojectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesprojectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
