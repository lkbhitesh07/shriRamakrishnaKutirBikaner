import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsBodyComponent } from './events-body.component';

describe('EventsBodyComponent', () => {
  let component: EventsBodyComponent;
  let fixture: ComponentFixture<EventsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
