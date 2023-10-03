import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesToVisitBodyComponent } from './places-to-visit-body.component';

describe('PlacesToVisitBodyComponent', () => {
  let component: PlacesToVisitBodyComponent;
  let fixture: ComponentFixture<PlacesToVisitBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacesToVisitBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacesToVisitBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
