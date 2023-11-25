import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BankList } from 'src/feature/banks/bank-list/type/BankList';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Bank } from 'src/core/model/Bank';

@Component({
  selector: 'app-bank-list-area',
  templateUrl: './bank-list-area.component.html',
  styleUrls: ['./bank-list-area.component.scss'],
})
export class BankListAreaComponent {
  // 銀行一覧データ
  @Input() banks!: BankList;

  // 並び替えた銀行リストを返す
  @Output() changeOrder: EventEmitter<[Bank]> = new EventEmitter();

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.banks.bank_list,
      event.previousIndex,
      event.currentIndex
    );
    this.changeOrder.emit(this.banks.bank_list);
  }
}
