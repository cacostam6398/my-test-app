import { TestBed } from '@angular/core/testing';

import { AmountBankService } from './amount-bank.service';

describe('AmountBankService', () => {
  let service: AmountBankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmountBankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
