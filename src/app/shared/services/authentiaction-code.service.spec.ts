import { TestBed, inject } from '@angular/core/testing';

import { AuthentiactionCodeService } from './authentiaction-code.service';

describe('AuthentiactionCodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthentiactionCodeService]
    });
  });

  it('should be created', inject([AuthentiactionCodeService], (service: AuthentiactionCodeService) => {
    expect(service).toBeTruthy();
  }));
});
