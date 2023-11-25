import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedCostRegisterFormComponent } from './fixed-cost-register-form.component';

describe('FixedCostRegisterFormComponent', () => {
  let component: FixedCostRegisterFormComponent;
  let fixture: ComponentFixture<FixedCostRegisterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixedCostRegisterFormComponent]
    });
    fixture = TestBed.createComponent(FixedCostRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
