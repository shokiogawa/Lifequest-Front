import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BankForm } from '../../types/BankForm';

@Component({
  selector: 'app-bank-register-form',
  templateUrl: './bank-register-form.component.html',
  styleUrls: ['./bank-register-form.component.scss'],
})
export class BankRegisterFormComponent {
  // フォームデータ
  // 親コンポーネントから渡される。
  @Input() bankForm!: FormGroup<BankForm>;
  // 親コンポーネントに渡す。
  @Output() onClick: EventEmitter<FormGroup<BankForm>> = new EventEmitter<
    FormGroup<BankForm>
  >();

  passBankInfo() {
    // 親コンポーネントにデータを返す。
    this.onClick.emit(this.bankForm);
  }
}
