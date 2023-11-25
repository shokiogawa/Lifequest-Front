import { Injectable, inject } from '@angular/core';
import { BankService } from '../../bank-service';
import { BehaviorSubject, catchError } from 'rxjs';
import { CustomeErrorHandler } from 'src/core/utility/error-handler';
import { InputBank } from '../../shared/types/InputBank';

@Injectable({ providedIn: 'root' })
export class BankRegisterUseCase {
  private readonly service = inject(BankService);
  private readonly errorHandler = inject(CustomeErrorHandler);

  private readonly errorState = new BehaviorSubject<string>('');
  private readonly successMessage = new BehaviorSubject<string>('');

  get error$() {
    return this.errorState.asObservable();
  }

  get successMessage$() {
    return this.successMessage.asObservable();
  }

  /**
   * 銀行作成
   * @param bank - 作成対象の銀行
   */
  public invoke = (bank: InputBank) => {
    this.service
      .createBank(bank)
      .pipe(
        catchError(
          this.errorHandler.handleError(
            'createBank',
            this.errorState,
            '銀行作成処理でエラーは発生しました。'
          )
        )
      )
      .subscribe(this.successHandler);
  };

  private successHandler = (response: any) => {
    this.successMessage.next('登録成功');
    console.log(response);
  };
}
