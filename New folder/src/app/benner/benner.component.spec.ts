import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BennerComponent } from './benner.component';

describe('BennerComponent', () => {
  let component: BennerComponent;
  let fixture: ComponentFixture<BennerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BennerComponent]
    });
    fixture = TestBed.createComponent(BennerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
