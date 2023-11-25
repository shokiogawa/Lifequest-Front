import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedCostRegisterComponent } from './fixed-cost-register.component';

describe('FixedCostRegisterComponent', () => {
  let component: FixedCostRegisterComponent;
  let fixture: ComponentFixture<FixedCostRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixedCostRegisterComponent]
    });
    fixture = TestBed.createComponent(FixedCostRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
