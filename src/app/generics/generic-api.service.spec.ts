import { TestBed } from '@angular/core/testing';

import { GenericApiService } from './generic-api.service';
import { IItem } from '../contracts/item';
import { IProduct } from '../contracts/product';

describe('GenericApiService', () => {
  let service: GenericApiService<IItem>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
