import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { BankListUseCase } from './usecase/bank-list-usecase';
import { Observable } from 'rxjs';
import { BankList } from './type/BankList';
import { Bank } from 'src/core/model/Bank';

@Component({
  selector: 'app-bank-list',
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss'],
})
export class BankListComponent implements OnInit, OnDestroy {
  private readonly bankUseCase = inject(BankListUseCase);
  public readonly state$: Observable<BankList | null> = this.bankUseCase.state$;
  public readonly error$: Observable<string> = this.bankUseCase.error$;

  ngOnInit(): void {
    console.log('やあ');
    // this.bankUseCase.state$;にデータ保持
    this.bankUseCase.initialize();
  }

  ngOnDestroy(): void {
    console.log('破棄');
  }

  changeBankListOrder = (bankList: [Bank]) => {
    this.bankUseCase.changeBankOrderState(bankList);
  };
}
