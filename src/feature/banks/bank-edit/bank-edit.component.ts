import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { BankForm } from '../shared/types/BankForm';
import { BankEditUseCase } from './usecase/bank-edit-usecase';
import { ActivatedRoute } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { InputBank } from '../shared/types/InputBank';

@Component({
  selector: 'app-bank-edit',
  templateUrl: './bank-edit.component.html',
  styleUrls: ['./bank-edit.component.scss'],
})
export class BankEditComponent implements OnInit, OnDestroy {
  private readonly bankEditUseCase = inject(BankEditUseCase);
  private readonly route = inject(ActivatedRoute);
  private readonly currentBankState$ = this.bankEditUseCase.state$;
  public readonly message$ = this.bankEditUseCase.message$;

  private readonly subscriptionList: Subscription[] = [];

  // 銀行フォーム作成
  bankForm = new FormGroup<BankForm>({
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

  onEditBank = (bankForm: FormGroup<BankForm>) => {
    const value = bankForm.getRawValue();
    // 編集APIに送信するBody
    const newBank: InputBank = {
      id: value.id,
      family_id: value.familyId,
      family_member_id: value.familyMemberId,
      name: value.name,
      code: value.code,
      branch_number: value.branchNumber,
      branch_name: value.branchName,
      account_number: value.accountNumber,
      total_amount: value.totalAmount,
      category_name: value.categoryName,
      created_at: value.createdAt,
      updated_at: value.updatedAt,
      deleted_at: value.deletedAt,
    };
    console.log(newBank.category_name);
    this.bankEditUseCase.invoke(newBank);
  };

  // 初期値セット
  ngOnInit(): void {
    // パス取得
    const bankId = Number(this.route.snapshot.paramMap.get('bankId'));
    // 編集画面遷移時に初期データ取得
    this.bankEditUseCase.initialize(bankId);

    // 詳細データ取得時、formGroupに詳細データを反映
    const subsc = this.currentBankState$.subscribe({
      next: (bankDetail) => {
        if (bankDetail) {
          this.bankForm = new FormGroup({
            id: new FormControl<number>(bankDetail.id, { nonNullable: true }),
            familyId: new FormControl<number>(bankDetail.family_id, {
              nonNullable: true,
            }),
            familyMemberId: new FormControl<number>(
              bankDetail.family_member_id,
              { nonNullable: true }
            ),
            name: new FormControl<string>(bankDetail.name, {
              nonNullable: true,
            }),
            code: new FormControl<string>(bankDetail.code, {
              nonNullable: true,
            }),
            branchName: new FormControl<string>(bankDetail.branch_name, {
              nonNullable: true,
            }),
            branchNumber: new FormControl<number>(bankDetail.branch_number, {
              nonNullable: true,
            }),
            accountNumber: new FormControl<number>(bankDetail.account_number, {
              nonNullable: true,
            }),
            totalAmount: new FormControl<number>(bankDetail.total_amount, {
              nonNullable: true,
            }),
            categoryName: new FormControl<string>(bankDetail.category_name, {
              nonNullable: true,
            }),
            createdAt: new FormControl<string>(bankDetail.created_at, {
              nonNullable: true,
            }),
            updatedAt: new FormControl<string>(bankDetail.updated_at, {
              nonNullable: true,
            }),
            deletedAt: new FormControl<string>(bankDetail.deleted_at, {
              nonNullable: true,
            }),
          });
        }
      },
    });
    this.subscriptionList.push(subsc);
  }

  ngOnDestroy(): void {
    this.bankForm.reset();
    this.subscriptionList.forEach((_) => _.unsubscribe);
  }
}
