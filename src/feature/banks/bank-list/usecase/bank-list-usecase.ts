import { BehaviorSubject, Observable, catchError, map, of } from 'rxjs';
import { BankService } from '../../bank-service';
import { Injectable, inject } from '@angular/core';
import { BankList } from '../type/BankList';
import { Bank } from 'src/core/model/Bank';

// 【クラス概要】
// 状態管理クラス
// ユースケース実現クラス
// Service層に依存し、ユースケースを達成する
@Injectable({ providedIn: 'root' })
export class BankListUseCase {
  private readonly bankService = inject(BankService);

  // obseableとして状態を公開(余計な機能(BehaviorSubjectは公開したくない？？))
  // state$以外で状態が変更されることはない
  get state$() {
    return this.store.asObservable();
  }

  // エラーメッセージ
  get error$() {
    return this.errorState.asObservable();
  }
  //ストリームを作成
  private readonly store = new BehaviorSubject<BankList | null>(null);

  private readonly errorState = new BehaviorSubject<string>('');

  // 初期化
  initialize() {
    // serviceからデータを取得し、bankListが取得できるので、BehaviorSubjectに流し込む。
    this.bankService
      .fetchBankList(14)
      .subscribe({ next: this.handlerSuccess, error: this.handleError });
  }

  // 成功時
  private handlerSuccess = (banks: BankList) => {
    this.store.next({ ...banks });
  };

  // 失敗時
  private handleError = (error: Error) => {
    this.errorState.next(error.message);
  };

  // TODO: stateの状態を更新し、DBの状態も変更すること。
  public changeBankOrderState = (bankList: [Bank]) => {
    var value = this.store.getValue();
    if (value) {
      value.bank_list = bankList;
    }
    this.store.next(value);
    console.log(this.store.getValue());
  };
}
