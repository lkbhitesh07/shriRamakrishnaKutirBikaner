import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationsBodyComponent } from './publications-body.component';

describe('PublicationsBodyComponent', () => {
  let component: PublicationsBodyComponent;
  let fixture: ComponentFixture<PublicationsBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationsBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicationsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
