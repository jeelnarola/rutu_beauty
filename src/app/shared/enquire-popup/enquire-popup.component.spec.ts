import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquirePopupComponent } from './enquire-popup.component';

describe('EnquirePopupComponent', () => {
  let component: EnquirePopupComponent;
  let fixture: ComponentFixture<EnquirePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnquirePopupComponent]
    });
    fixture = TestBed.createComponent(EnquirePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
