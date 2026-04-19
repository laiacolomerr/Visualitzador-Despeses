import { TestBed } from '@angular/core/testing';

import { DestacatsService } from './destacats.service';

describe('PreferitsService', () => {
  let service: DestacatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestacatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
