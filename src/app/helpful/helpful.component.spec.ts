import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpfulComponent } from './helpful.component';

describe('HelpfulComponent', () => {
  let component: HelpfulComponent;
  let fixture: ComponentFixture<HelpfulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpfulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
