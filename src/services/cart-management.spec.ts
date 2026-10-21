import { TestBed } from '@angular/core/testing';
import { CartManagement } from './cart-management';

describe('CartManagement', () => {
  let service: CartManagement;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartManagement);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
