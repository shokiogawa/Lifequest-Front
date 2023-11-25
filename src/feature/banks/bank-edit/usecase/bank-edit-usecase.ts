import { Inject, Injectable, inject } from '@angular/core';
import { BankService } from '../../bank-service';
import { BehaviorSubject, Subject } from 'rxjs';
import { Bank } from 'src/core/model/Bank';
import { InputBank } from '../../shared/types/InputBank';

@Injectable({ providedIn: 'root' })
export class BankEditUseCase {
  private readonly bankService = inject(BankService);

  // 状態管理と、コンポーネントを分けたかったため、usecase層を作成
  private readonly state = new BehaviorSubject<Bank | null>(null);
  private readonly messageState = new Subject<string>();

  get state$() {
    // 使用元で編集されないように、observerで公開
    return this.state.asObservable();
  }

  get message$() {
    // 使用元で編集されないように、Observerで公開
    return this.messageState.asObservable();
  }

  // 銀行詳細データ取得
  public initialize(bankId: number) {
    const bankDetail = this.bankService.fetchBankDetail(bankId).subscribe({
      next: this.handleFetchSuccess,
      error: this.handleError,
    });
  }

  private handleFetchSuccess = (bank: Bank) => {
    this.state.next(bank);
  };

  // 銀行編集
  public invoke(bank: InputBank) {
    this.bankService
      .editBank(bank)
      .subscribe({ next: this.handleUpdateSuccess, error: this.handleError });
  }

  private handleUpdateSuccess = (value: any) => {
    this.messageState.next('銀行情報を更新しました。');
  };

  private handleError = (error: Error) => {
    this.messageState.next(error.message);
  };
}
