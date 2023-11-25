import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedCostListComponent } from './fixed-cost-list.component';

describe('FixedCostListComponent', () => {
  let component: FixedCostListComponent;
  let fixture: ComponentFixture<FixedCostListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixedCostListComponent]
    });
    fixture = TestBed.createComponent(FixedCostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
