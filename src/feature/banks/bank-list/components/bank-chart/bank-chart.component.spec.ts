import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankChartComponent } from './bank-chart.component';

describe('BankChartComponent', () => {
  let component: BankChartComponent;
  let fixture: ComponentFixture<BankChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankChartComponent]
    });
    fixture = TestBed.createComponent(BankChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
