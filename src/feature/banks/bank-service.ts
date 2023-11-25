import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from 'src/core/model/Bank';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BankList } from './bank-list/type/BankList';
import { InputBank } from './shared/types/InputBank';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  private path = 'http://localhost:80/api/bank';
  private httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
  private readonly http = inject(HttpClient);
  // 銀行リスト取得メソッド
  fetchBankList = (id: number): Observable<BankList> => {
    const queryParam = new HttpParams().set('familyId', id);
    return this.http.get<BankList>(this.path, {
      params: queryParam,
      headers: this.httpHeader,
    });
  };

  //銀行詳細取得メソッド
  fetchBankDetail = (id: number): Observable<Bank> => {
    const detailPath = this.path + '/detail';
    const queryParam = new HttpParams().set('bankId', id);
    return this.http.get<Bank>(detailPath, {
      params: queryParam,
      headers: this.httpHeader,
    });
  };

  //銀行作成
  createBank = (bank: InputBank): Observable<any> => {
    return this.http.post(this.path, bank, { headers: this.httpHeader });
  };

  editBank = (bank: InputBank): Observable<any> => {
    const editBankPath = this.path + '/edit';
    return this.http.put(editBankPath, bank, { headers: this.httpHeader });
  };

  //銀行編集
  editTotalAmount = (bank: Bank): Observable<any> => {
    return this.http.post(this.path, bank, { headers: this.httpHeader });
  };
}

// https://zenn.dev/lacolaco/books/angular-after-tutorial/viewer/component-and-service
