import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShopPrototype } from './shop-prototype';

describe('ShopPrototype', () => {
  let component: ShopPrototype;
  let fixture: ComponentFixture<ShopPrototype>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopPrototype],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopPrototype);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
