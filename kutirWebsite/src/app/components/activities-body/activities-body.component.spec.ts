import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesBodyComponent } from './activities-body.component';

describe('ActivitiesBodyComponent', () => {
  let component: ActivitiesBodyComponent;
  let fixture: ComponentFixture<ActivitiesBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivitiesBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitiesBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
