import { TestBed } from '@angular/core/testing';

import { PagamentService } from './pagament.service';

describe('ElementService', () => {
  let service: PagamentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagamentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
