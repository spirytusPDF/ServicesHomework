import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayTasks } from './display-tasks';

describe('DisplayTasks', () => {
  let component: DisplayTasks;
  let fixture: ComponentFixture<DisplayTasks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayTasks],
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayTasks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
