import { TestBed } from '@angular/core/testing';

import { ChimShopChaiService } from './chim-shop-chai.service';

describe('ChimShopChaiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChimShopChaiService = TestBed.get(ChimShopChaiService);
    expect(service).toBeTruthy();
  });
});
