import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportEventsComponent } from './sport-events.component';

describe('SportEventsComponent', () => {
  let component: SportEventsComponent;
  let fixture: ComponentFixture<SportEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
