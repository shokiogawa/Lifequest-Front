import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankListAreaComponent } from './bank-list-area.component';

describe('BankListAreaComponent', () => {
  let component: BankListAreaComponent;
  let fixture: ComponentFixture<BankListAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankListAreaComponent]
    });
    fixture = TestBed.createComponent(BankListAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
