import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonateBodyComponent } from './donate-body.component';

describe('DonateBodyComponent', () => {
  let component: DonateBodyComponent;
  let fixture: ComponentFixture<DonateBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonateBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonateBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
