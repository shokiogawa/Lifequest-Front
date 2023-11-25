import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankRegisterFormComponent } from './bank-register-form.component';

describe('BankRegisterFormComponent', () => {
  let component: BankRegisterFormComponent;
  let fixture: ComponentFixture<BankRegisterFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankRegisterFormComponent]
    });
    fixture = TestBed.createComponent(BankRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
