import { BehaviorSubject, Subject } from 'rxjs';
import { Injectable, inject } from '@angular/core';
import { FixedCostService } from '../../fixed-cost-service';
import { FixedCostResponse } from '../../shared/type/FixedCostResponse';

// 【クラス概要】
// 状態管理クラス
// ユースケース実現クラス
// Service層に依存し、ユースケースを達成する
@Injectable({ providedIn: 'root' })
export class FixedCostListUseCase {
  //依存関係解消
  private readonly fixedCostService = inject(FixedCostService);

  // 状態取得
  private readonly state = new Subject<FixedCostResponse[]>();
  private readonly totalAmountState = new BehaviorSubject<number>(0);
  private readonly errorState = new Subject<string>();

  get state$() {
    return this.state.asObservable();
  }

  get totalAmountState$() {
    return this.totalAmountState.asObservable();
  }

  get errorState$() {
    return this.errorState.asObservable();
  }

  // 初期化
  public initialize(familyId: number) {
    this.fixedCostService.fetchFixedCostList(familyId).subscribe({
      next: (fixedCostList) => {
        const totalAmount = this.caclTotalAmount(
          fixedCostList.map((_) => _.expose)
        );
        this.totalAmountState.next(totalAmount);
        this.state.next(fixedCostList);
      },
      error: (error: Error) => {
        this.errorState.next(error.message);
      },
    });
  }

  // 合計金額計算
  private caclTotalAmount = (amountList: number[]): number => {
    const total = amountList.reduce(function (a, x) {
      return a + x;
    });
    return total;
  };
}
