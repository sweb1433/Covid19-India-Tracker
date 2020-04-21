import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTrackerComponent } from './date-tracker.component';

describe('DateTrackerComponent', () => {
  let component: DateTrackerComponent;
  let fixture: ComponentFixture<DateTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
