import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { InputBank } from '../shared/types/InputBank';
import { BankService } from '../bank-service';
import { HttpResponse } from '@angular/common/http';
import { BankForm } from '../shared/types/BankForm';

@Component({
  selector: 'app-bank-register',
  templateUrl: './bank-register.component.html',
  styleUrls: ['./bank-register.component.scss'],
})
export class BankRegisterComponent {
  private readonly bankService = inject(BankService);
  private readonly formBuilder = inject(FormBuilder);
  public successMessage$: string = '';
  public errorMessage$: string = '';

  // フォームの初期値を作成
  bankForm = this.formBuilder.group<BankForm>({
    id: new FormControl<number>(0, { nonNullable: true }),
    familyId: new FormControl<number>(0, { nonNullable: true }),
    familyMemberId: new FormControl<number>(0, { nonNullable: true }),
    name: new FormControl<string>('', { nonNullable: true }),
    code: new FormControl<string>('', { nonNullable: true }),
    branchName: new FormControl<string>('', { nonNullable: true }),
    branchNumber: new FormControl<number>(0, { nonNullable: true }),
    accountNumber: new FormControl<number>(0, { nonNullable: true }),
    totalAmount: new FormControl<number>(0, { nonNullable: true }),
    categoryName: new FormControl<string>('', { nonNullable: true }),
    createdAt: new FormControl<string>('', { nonNullable: true }),
    updatedAt: new FormControl<string>('', { nonNullable: true }),
    deletedAt: new FormControl<string>('', { nonNullable: true }),
  });

  /**
    子コンポーネントから。FormGroupを受け取る。
    https://dev.to/puku0x/angular-react-2h4j
   **/
  onSaveBank = (bankForm: FormGroup<BankForm>): void => {
    const {
      name,
      code,
      branchName,
      branchNumber,
      accountNumber,
      totalAmount,
      categoryName,
    } = bankForm.getRawValue();
    // api経由で保存するデータ作成
    const inputBank: InputBank = {
      family_id: 14,
      family_member_id: 1,
      name: name,
      code: code,
      branch_name: branchName,
      branch_number: branchNumber,
      account_number: accountNumber,
      total_amount: totalAmount,
      category_name: categoryName,
    };
    if (inputBank.total_amount > 0) {
      this.bankService.createBank(inputBank).subscribe({
        next: (response: HttpResponse<any>) => {
          this.successMessage$ = '銀行追加に成功しました。';
          this.bankForm.reset();
        },
        error: (e: Error) => {
          this.errorMessage$ = '銀行作成に失敗しました。';
        },
      });
    }
  };
}
