import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisctrictWiseComponent } from './disctrict-wise.component';

describe('DisctrictWiseComponent', () => {
  let component: DisctrictWiseComponent;
  let fixture: ComponentFixture<DisctrictWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisctrictWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisctrictWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
