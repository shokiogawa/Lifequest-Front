import { Component, OnInit, inject } from '@angular/core';
import { FixedCostListUseCase } from './usecase/fixed-cost-list-usecase';

@Component({
  selector: 'app-fixed-cost-list',
  templateUrl: './fixed-cost-list.component.html',
  styleUrls: ['./fixed-cost-list.component.scss'],
})
export class FixedCostListComponent implements OnInit {
  private readonly fixedCostUseCase = inject(FixedCostListUseCase);

  public readonly fixedCostList$ = this.fixedCostUseCase.state$;
  public readonly errorMessage$ = this.fixedCostUseCase.errorState$;

  public readonly totalAmount$ = this.fixedCostUseCase.totalAmountState$;

  // 初期化
  ngOnInit(): void {
    const familyId = 14;
    this.fixedCostUseCase.initialize(familyId);

    // this.fixedCostList$.subscribe({
    //   next: (value) => {
    //     const list = value.map((fixedCost) => fixedCost.expose);
    //     this.totalAmount = this.caclTotalAmount(list);
    //   },
    // });
  }
}
