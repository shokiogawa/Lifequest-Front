import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CustomeErrorHandler {
  /**
   * 失敗したHttp操作を処理します。
   * アプリを持続させます。
   *
   * @param operation - 失敗した操作の名前
   * @param result - observableな結果として返す任意の値
   * @returns 空のObservable
   */
  public handleError<T>(
    operation: string = 'operation',
    errorState?: BehaviorSubject<string>,
    errorMessage: string = 'エラーが発生しました'
  ) {
    return (error: any): Observable<T> => {
      // リモート上のロギング基盤にエラーを送信する
      console.error(error, operation);

      // ユーザーへの開示のためにエラーの変換処理を改善する
      if (errorState) errorState.next(`${errorMessage}: ${error.message}`);
      // 空の結果を返して、アプリを持続可能にする
      return of();
    };
  }
}
